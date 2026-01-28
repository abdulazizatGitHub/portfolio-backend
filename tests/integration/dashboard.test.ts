import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as bcrypt from 'bcrypt';
import path from 'path';
import fs from 'fs';

describe('Dashboard & Analytics Integration Tests', () => {
    let app: any;
    let adminToken: string;
    const testIconPath = path.join(__dirname, '../fixtures/skill-icon.png');

    beforeAll(async () => {
        app = createApp();

        // Create admin user and get token
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await prisma.user.upsert({
            where: { email: 'admin-dashboard@example.com' },
            update: {},
            create: {
                email: 'admin-dashboard@example.com',
                password: hashedPassword,
                name: 'Dashboard Admin',
                role: 'ADMIN',
            },
        });

        const loginRes = await request(app).post('/api/v1/auth/login').send({
            email: 'admin-dashboard@example.com',
            password: 'admin123',
        });
        adminToken = loginRes.body.data.tokens.accessToken;

        // Ensure icon fixture exists
        if (!fs.existsSync(path.dirname(testIconPath))) {
            fs.mkdirSync(path.dirname(testIconPath), { recursive: true });
        }
        if (!fs.existsSync(testIconPath)) {
            fs.writeFileSync(testIconPath, 'dummy icon content');
        }
    });

    afterAll(async () => {
        await prisma.user.deleteMany({ where: { email: 'admin-dashboard@example.com' } });
        await prisma.pageVisit.deleteMany();
        await prisma.eventLog.deleteMany();
    });

    describe('Analytics Tracking', () => {
        it('should track public page visits automatically', async () => {
            // Visit some public endpoints
            await request(app).get('/api/v1/projects');
            await request(app).get('/api/v1/skills');

            const visits = await prisma.pageVisit.findMany();
            expect(visits.length).toBeGreaterThanOrEqual(2);
            expect(visits.some(v => v.path === '/api/v1/projects')).toBe(true);
            expect(visits.some(v => v.path === '/api/v1/skills')).toBe(true);
        });

        it('should log custom engagement events', async () => {
            const eventData = {
                type: 'cv_download',
                category: 'engagement',
                label: 'Resume_2024.pdf',
                metadata: { source: 'dashboard_test' }
            };

            const res = await request(app)
                .post('/api/v1/analytics/events')
                .send(eventData);

            expect(res.status).toBe(201);

            const event = await prisma.eventLog.findFirst({
                where: { event_type: 'cv_download' }
            });
            expect(event).toBeDefined();
            expect(event?.label).toBe('Resume_2024.pdf');
        });
    });

    describe('Dashboard Aggregation', () => {
        it('should retrieve aggregated command center statistics', async () => {
            const res = await request(app)
                .get('/api/v1/dashboard/stats')
                .set('Authorization', `Bearer ${adminToken}`);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data).toHaveProperty('growthAnalytics');
            expect(res.body.data).toHaveProperty('visitTrend');
            expect(res.body.data).toHaveProperty('contentVelocity');
            expect(res.body.data).toHaveProperty('deepInsights');

            expect(res.body.data.growthAnalytics.totalVisits).toBeGreaterThanOrEqual(2);
            expect(res.body.data.growthAnalytics.cvDownloads).toBeGreaterThanOrEqual(1);
        });
    });

    describe('Skill Icon Upload', () => {
        let skillId: string;

        beforeAll(async () => {
            await prisma.category.upsert({
                where: { name: 'Analytics Test' },
                update: {},
                create: { name: 'Analytics Test', slug: 'analytics-test' }
            });

            await prisma.skill.upsert({
                where: { name: 'Dashboard Test Skill' },
                update: {},
                create: {
                    name: 'Dashboard Test Skill',
                    slug: 'dashboard-test-skill',
                    category: 'Technical'
                }
            });
            const skill = await prisma.skill.findUnique({ where: { name: 'Dashboard Test Skill' } });
            skillId = skill!.id;
        });

        it('should upload and link an icon to a skill', async () => {
            const res = await request(app)
                .post(`/api/v1/skills/${skillId}/icon`)
                .set('Authorization', `Bearer ${adminToken}`)
                .attach('skill-icon', testIconPath);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.icon_url).toContain('/uploads/skills/skill-icon-');

            // Verify path exists
            const relativePath = res.body.data.icon_url.startsWith('/')
                ? res.body.data.icon_url.substring(1)
                : res.body.data.icon_url;
            expect(fs.existsSync(relativePath)).toBe(true);
        });
    });
});
