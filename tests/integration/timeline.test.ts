import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('Timeline Integration', () => {
    let app: any;
    let adminToken: string;

    beforeAll(async () => {
        app = createApp();

        // Setup admin token
        adminToken = tokenService.generateAccessToken({
            sub: 'admin-123',
            email: 'admin@example.com',
            role: Role.ADMIN,
        });

        // Clean up
        await prisma.experienceEntry.deleteMany();
        await prisma.educationEntry.deleteMany();
    });

    afterAll(async () => {
        await prisma.experienceEntry.deleteMany();
        await prisma.educationEntry.deleteMany();
        await prisma.$disconnect();
    });

    describe('Public Access', () => {
        it('should return empty timeline data initially', async () => {
            const res = await request(app).get('/api/v1/timeline');
            expect(res.status).toBe(200);
            expect(res.body.data.education).toHaveLength(0);
            expect(res.body.data.experience).toHaveLength(0);
        });
    });

    describe('Admin Management', () => {
        let eduId: string;
        let expId: string;

        it('should create an education entry', async () => {
            const res = await request(app)
                .post('/api/v1/timeline/education')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    period: '2018 - 2022',
                    title: 'B.S. in Computer Science, University of Life',
                    description: 'Studied various algorithms and complex systems.',
                    order_index: 0
                });

            expect(res.status).toBe(201);
            expect(res.body.data.title).toContain('B.S.');
            eduId = res.body.data.id;
        });

        it('should create an experience entry', async () => {
            const res = await request(app)
                .post('/api/v1/timeline/experience')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    period: '2022 - Present',
                    title: 'Senior Developer, Tech Solutions',
                    description: 'Leading the development of scalable cloud architectures.',
                    order_index: 0,
                    is_current: true
                });

            expect(res.status).toBe(201);
            expect(res.body.data.company).toBeUndefined(); // Verify we use title for combined info
            expect(res.body.data.title).toContain('Senior Developer');
            expId = res.body.data.id;
        });

        it('should retrieve individual lists', async () => {
            const eduRes = await request(app).get('/api/v1/timeline/education');
            expect(eduRes.body.data).toHaveLength(1);

            const expRes = await request(app).get('/api/v1/timeline/experience');
            expect(expRes.body.data).toHaveLength(1);
        });

        it('should update and delete entries', async () => {
            // Update
            const updRes = await request(app)
                .patch(`/api/v1/timeline/experience/${expId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ title: 'Architect' });
            expect(updRes.body.data.title).toBe('Architect');

            // Delete
            await request(app)
                .delete(`/api/v1/timeline/education/${eduId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            const count = await prisma.educationEntry.count();
            expect(count).toBe(0);
        });
    });
});
