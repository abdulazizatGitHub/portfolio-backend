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
        it('should return an empty list when no sections exist', async () => {
            const res = await request(app).get('/api/v1/about');
            expect(res.status).toBe(200);
            expect(res.body.data).toEqual([]);
        });
    });

    describe('Admin Management', () => {
        let sectionId: string;

        it('should create an about section', async () => {
            const res = await request(app)
                .post('/api/v1/about/sections')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ role_title: 'Software Architect', order_index: 0 });

            expect(res.status).toBe(201);
            expect(res.body.data.role_title).toBe('Software Architect');
            sectionId = res.body.data.id;
        });

        it('should update the about section', async () => {
            const res = await request(app)
                .patch(`/api/v1/about/sections/${sectionId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ role_title: 'Principal Engineer' });

            expect(res.status).toBe(200);
            expect(res.body.data.role_title).toBe('Principal Engineer');
        });

        it('should manage paragraphs scoped to the section', async () => {
            const createRes = await request(app)
                .post(`/api/v1/about/sections/${sectionId}/paragraphs`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ content: 'This is a long bio paragraph for testing.', order_index: 1 });

            expect(createRes.status).toBe(201);
            const pId = createRes.body.data.id;

            const getRes = await request(app).get('/api/v1/about');
            const section = getRes.body.data.find((s: any) => s.id === sectionId);
            expect(section.paragraphs).toHaveLength(1);

            await request(app)
                .delete(`/api/v1/about/paragraphs/${pId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            const getRes2 = await request(app).get('/api/v1/about');
            const section2 = getRes2.body.data.find((s: any) => s.id === sectionId);
            expect(section2.paragraphs).toHaveLength(0);
        });

        it('should manage stats scoped to the section', async () => {
            const createRes = await request(app)
                .post(`/api/v1/about/sections/${sectionId}/stats`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ label: 'Projects', value: '50+' });

            expect(createRes.status).toBe(201);
            const sId = createRes.body.data.id;

            const updateRes = await request(app)
                .patch(`/api/v1/about/stats/${sId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ value: '60+' });
            expect(updateRes.body.data.value).toBe('60+');

            await request(app)
                .delete(`/api/v1/about/stats/${sId}`)
                .set('Authorization', `Bearer ${adminToken}`);
        });

        it('should delete the about section', async () => {
            const res = await request(app)
                .delete(`/api/v1/about/sections/${sectionId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(res.status).toBe(200);
        });
    });
});
