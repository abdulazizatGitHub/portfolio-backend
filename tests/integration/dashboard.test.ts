import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma, Role } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
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
        const admin = await prisma.user.upsert({
            where: { email: 'admin-dashboard@example.com' },
            update: {},
            create: {
                email: 'admin-dashboard@example.com',
                password: hashedPassword,
                name: 'Dashboard Admin',
                role: 'ADMIN',
            },
        });
        adminToken = tokenService.generateAccessToken({ sub: admin.id, email: admin.email, role: admin.role as Role });

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
            expect(res.body.status).toBe('success');
            expect(res.body.data).toHaveProperty('growthAnalytics');
            expect(res.body.data).toHaveProperty('visitTrend');
            expect(res.body.data).toHaveProperty('contentVelocity');
            expect(res.body.data).toHaveProperty('deepInsights');

            expect(res.body.data.growthAnalytics.totalVisits).toBeGreaterThanOrEqual(2);
            expect(res.body.data.growthAnalytics.cvDownloads).toBeGreaterThanOrEqual(1);
        });

        it('should compute tech stack distribution, device breakdown, and traffic sources', async () => {
            const category = await prisma.category.upsert({
                where: { name: 'Dashboard Insights Category' },
                update: {},
                create: { name: 'Dashboard Insights Category', slug: 'dashboard-insights-category' },
            });
            const skill = await prisma.skill.upsert({
                where: { name: 'Dashboard Insights Skill' },
                update: {},
                create: { name: 'Dashboard Insights Skill', slug: 'dashboard-insights-skill' },
            });
            const project = await prisma.project.create({
                data: {
                    title: 'Dashboard Insights Project',
                    short_description: 'For dashboard insight tests',
                    description: 'For dashboard insight tests',
                    category_id: category.id,
                    is_published: true,
                    project_skills: { create: { skill_id: skill.id } },
                },
            });

            await prisma.pageVisit.createMany({
                data: [
                    { path: '/desktop-visit', device: 'desktop', referer: 'https://www.google.com/search' },
                    { path: '/mobile-visit', device: 'mobile', referer: null },
                    { path: '/no-device-visit', device: null, referer: 'not-a-valid-url' },
                ],
            });

            const res = await request(app)
                .get('/api/v1/dashboard/stats')
                .set('Authorization', `Bearer ${adminToken}`);

            expect(res.status).toBe(200);
            expect(
                res.body.data.deepInsights.techStack.some((t: any) => t.name === 'Dashboard Insights Skill')
            ).toBe(true);
            expect(
                res.body.data.deepInsights.deviceBreakdown.some((d: any) => d.device === 'desktop')
            ).toBe(true);
            expect(
                res.body.data.deepInsights.deviceBreakdown.some((d: any) => d.device === 'mobile')
            ).toBe(true);
            // null device falls back to 'desktop' in the aggregation
            expect(
                res.body.data.deepInsights.trafficSources.some((s: any) => s.source === 'google.com')
            ).toBe(true);
            expect(
                res.body.data.deepInsights.trafficSources.some((s: any) => s.source === 'Direct')
            ).toBe(true);
            // an unparseable referer falls back to using the raw string as the source
            expect(
                res.body.data.deepInsights.trafficSources.some((s: any) => s.source === 'not-a-valid-url')
            ).toBe(true);

            await prisma.project.delete({ where: { id: project.id } });
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
            expect(res.body.status).toBe('success');
            expect(res.body.data.icon_url).toContain('/uploads/skills/skill-icon-');

            // Verify path exists
            const relativePath = res.body.data.icon_url.startsWith('/')
                ? res.body.data.icon_url.substring(1)
                : res.body.data.icon_url;
            expect(fs.existsSync(relativePath)).toBe(true);
        });
    });
});
