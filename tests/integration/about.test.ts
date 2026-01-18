import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('About & Stats Integration', () => {
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
        await prisma.stat.deleteMany();
        await prisma.aboutParagraph.deleteMany();
        await prisma.aboutContent.deleteMany();
    });

    afterAll(async () => {
        await prisma.stat.deleteMany();
        await prisma.aboutParagraph.deleteMany();
        await prisma.aboutContent.deleteMany();
        await prisma.$disconnect();
    });

    describe('GET /api/v1/about', () => {
        it('should return 404 if no content initialized', async () => {
            const res = await request(app).get('/api/v1/about');
            expect(res.status).toBe(404);
        });
    });

    describe('Admin Management', () => {
        it('should initialize about metadata', async () => {
            const res = await request(app)
                .put('/api/v1/about')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ role_title: 'Software Architect' });

            expect(res.status).toBe(200);
            expect(res.body.data.role_title).toBe('Software Architect');
        });

        it('should manage paragraphs', async () => {
            // Create
            const createRes = await request(app)
                .post('/api/v1/about/paragraphs')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ content: 'This is a long bio paragraph for testing.', order_index: 1 });

            expect(createRes.status).toBe(201);
            const pId = createRes.body.data.id;

            // Updated unified retrieval
            const getRes = await request(app).get('/api/v1/about');
            expect(getRes.body.data.paragraphs).toHaveLength(1);

            // Delete
            await request(app)
                .delete(`/api/v1/about/paragraphs/${pId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            const getRes2 = await request(app).get('/api/v1/about');
            expect(getRes2.body.data.paragraphs).toHaveLength(0);
        });

        it('should manage stats', async () => {
            // Create
            const createRes = await request(app)
                .post('/api/v1/about/stats')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ label: 'Projects', value: '50+' });

            expect(createRes.status).toBe(201);
            const sId = createRes.body.data.id;

            // Update
            const updateRes = await request(app)
                .patch(`/api/v1/about/stats/${sId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ value: '60+' });
            expect(updateRes.body.data.value).toBe('60+');

            // Delete
            await request(app)
                .delete(`/api/v1/about/stats/${sId}`)
                .set('Authorization', `Bearer ${adminToken}`);
        });
    });
});
