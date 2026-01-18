import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('Personal & JobRole Integration', () => {
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
        await prisma.jobRole.deleteMany();
        await prisma.personalContent.deleteMany();
    });

    afterAll(async () => {
        await prisma.jobRole.deleteMany();
        await prisma.personalContent.deleteMany();
        await prisma.$disconnect();
    });

    describe('GET /api/v1/personal', () => {
        it('should return 404 if no content initialized', async () => {
            const res = await request(app).get('/api/v1/personal');
            expect(res.status).toBe(404);
            expect(res.body.success).toBe(false);
        });
    });

    describe('PUT /api/v1/personal', () => {
        it('should create initial personal content (Admin Only)', async () => {
            const data = {
                name: 'Abdul Aziz',
                title_prefix: 'Hi, I am',
                description: 'A passionate Software Engineer with expertise in AI/ML.',
                cv_file_path: 'https://example.com/cv.pdf',
                cv_download_name: 'Abdul-Aziz-CV.pdf'
            };

            const res = await request(app)
                .put('/api/v1/personal')
                .set('Authorization', `Bearer ${adminToken}`)
                .send(data);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.name).toBe(data.name);

            // Verify persistence
            const dbContent = await prisma.personalContent.findFirst();
            expect(dbContent?.name).toBe(data.name);
        });

        it('should update existing content', async () => {
            const res = await request(app)
                .put('/api/v1/personal')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Updated Name', title_prefix: 'Hi!', description: 'Short desc must be 10 char', cv_file_path: 'a', cv_download_name: 'b' });

            expect(res.status).toBe(200);
            expect(res.body.data.name).toBe('Updated Name');
        });
    });

    describe('Job Role CRUD', () => {
        let roleId: string;

        it('should create a job role (Admin Only)', async () => {
            const res = await request(app)
                .post('/api/v1/personal/roles')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ label: 'Software Engineer', order_index: 1 });

            expect(res.status).toBe(201);
            expect(res.body.data.label).toBe('Software Engineer');
            roleId = res.body.data.id;
        });

        it('should retrieve all roles publicly', async () => {
            const res = await request(app).get('/api/v1/personal/roles');
            expect(res.status).toBe(200);
            expect(res.body.data).toHaveLength(1);
            expect(res.body.meta).toBeDefined();
        });

        it('should update a role (Admin Only)', async () => {
            const res = await request(app)
                .patch(`/api/v1/personal/roles/${roleId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ label: 'AI Engineer' });

            expect(res.status).toBe(200);
            expect(res.body.data.label).toBe('AI Engineer');
        });

        it('should delete a role (Admin Only)', async () => {
            const res = await request(app)
                .delete(`/api/v1/personal/roles/${roleId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(res.status).toBe(200);
            const count = await prisma.jobRole.count();
            expect(count).toBe(0);
        });
    });
});
