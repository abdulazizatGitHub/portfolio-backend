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
        await prisma.experienceRole.deleteMany();
        await prisma.experience.deleteMany();
        await prisma.educationEntry.deleteMany();
    });

    afterAll(async () => {
        await prisma.experienceRole.deleteMany();
        await prisma.experience.deleteMany();
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

        it('should create an experience entry with a nested role', async () => {
            const res = await request(app)
                .post('/api/v1/timeline/experience')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    organization: 'Tech Solutions',
                    location: 'Remote',
                    employment_type: 'FULL_TIME',
                    summary: 'Leading cloud architecture initiatives.',
                    order_index: 0,
                    roles: [
                        {
                            job_title: 'Senior Developer',
                            start_date: '2022-01-01',
                            end_date: null,
                            description: 'Leading the development of scalable cloud architectures.',
                            order_index: 0,
                        },
                    ],
                });

            expect(res.status).toBe(201);
            expect(res.body.data.organization).toBe('Tech Solutions');
            expect(res.body.data.roles).toHaveLength(1);
            expect(res.body.data.roles[0].job_title).toBe('Senior Developer');
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
                .send({ organization: 'Architect Studio' });
            expect(updRes.body.data.organization).toBe('Architect Studio');

            // Delete
            await request(app)
                .delete(`/api/v1/timeline/education/${eduId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            const count = await prisma.educationEntry.count();
            expect(count).toBe(0);
        });

        it('should 404 when updating a missing education entry', async () => {
            const res = await request(app)
                .patch(`/api/v1/timeline/education/${eduId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ title: 'Ghost' });
            expect(res.status).toBe(404);
        });

        it('should 404 when deleting a missing experience entry', async () => {
            const res = await request(app)
                .delete(`/api/v1/timeline/experience/${eduId}`)
                .set('Authorization', `Bearer ${adminToken}`);
            expect(res.status).toBe(404);
        });

        it('should manage experience roles', async () => {
            const createRes = await request(app)
                .post(`/api/v1/timeline/experience/${expId}/roles`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    job_title: 'Staff Engineer',
                    start_date: '2023-01-01',
                    description: 'Led platform engineering efforts across teams.',
                    order_index: 1,
                });

            expect(createRes.status).toBe(201);
            const roleId = createRes.body.data.id;

            const updateRes = await request(app)
                .patch(`/api/v1/timeline/experience/roles/${roleId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ job_title: 'Principal Engineer' });
            expect(updateRes.status).toBe(200);
            expect(updateRes.body.data.job_title).toBe('Principal Engineer');

            const deleteRes = await request(app)
                .delete(`/api/v1/timeline/experience/roles/${roleId}`)
                .set('Authorization', `Bearer ${adminToken}`);
            expect(deleteRes.status).toBe(200);

            const remaining = await prisma.experienceRole.findUnique({ where: { id: roleId } });
            expect(remaining).toBeNull();
        });
    });
});
