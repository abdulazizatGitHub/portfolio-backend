import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '@data/prisma.client';
import * as tokenService from '@core/services/token.service';
import { Role } from '@data/prisma.client';

describe('Project Integration Tests', () => {
    let app: Application;
    let adminToken: string;
    let categoryId: string;
    let skillId: string;

    beforeAll(async () => {
        app = createApp();

        // Clean up
        await prisma.project.deleteMany({ where: { title: { startsWith: 'test-' } } });
        await prisma.skill.deleteMany({ where: { name: { startsWith: 'test-' } } });
        await prisma.category.deleteMany({ where: { name: { startsWith: 'test-' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });

        // Create admin
        const admin = await prisma.user.upsert({
            where: { email: 'test-admin-proj@example.com' },
            update: {},
            create: {
                email: 'test-admin-proj@example.com',
                password: 'hashed',
                name: 'Admin',
                role: Role.ADMIN
            }
        });
        adminToken = tokenService.generateAccessToken({ sub: admin.id, email: admin.email, role: admin.role });

        // Create category
        const category = await prisma.category.upsert({
            where: { name: 'test-Tech' },
            update: {},
            create: { name: 'test-Tech', slug: 'test-tech' }
        });
        categoryId = category.id;

        // Create skill
        const skill = await prisma.skill.upsert({
            where: { name: 'test-React' },
            update: {},
            create: { name: 'test-React', slug: 'test-react' }
        });
        skillId = skill.id;
    });

    afterAll(async () => {
        await prisma.project.deleteMany({ where: { title: { startsWith: 'test-' } } });
        await prisma.skill.deleteMany({ where: { name: { startsWith: 'test-' } } });
        await prisma.category.deleteMany({ where: { name: { startsWith: 'test-' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });
        await prisma.$disconnect();
    });

    let projectId: string;

    describe('POST /api/v1/projects', () => {
        it('should create a project with skills as admin', async () => {
            const response = await request(app)
                .post('/api/v1/projects')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    title: 'test-Project',
                    description: 'A very cool test project description',
                    long_description: 'Long content about the test project',
                    category_id: categoryId,
                    skill_ids: [skillId],
                    is_published: true
                });

            if (response.status !== 201) {
                console.log('CREATE PROJECT ERROR:', JSON.stringify(response.body, null, 2));
            }

            expect(response.status).toBe(201);
            expect(response.body.data.project.title).toBe('test-Project');
            projectId = response.body.data.project.id;
        });

        it('should return 401 if not authenticated', async () => {
            const response = await request(app)
                .post('/api/v1/projects')
                .send({ title: 'test-Fail' });

            expect(response.status).toBe(401);
        });
    });

    describe('GET /api/v1/projects', () => {
        it('should return projects with filters', async () => {
            const response = await request(app)
                .get('/api/v1/projects')
                .query({ is_published: 'true', category_id: categoryId });

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.data.projects)).toBe(true);
            expect(response.body.data.projects.length).toBeGreaterThan(0);
        });
    });

    describe('PATCH /api/v1/projects/:id', () => {
        it('should update project fields and skills', async () => {
            const response = await request(app)
                .patch(`/api/v1/projects/${projectId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    title: 'test-Updated Project Title',
                    skill_ids: [] // Remove skills
                });

            expect(response.status).toBe(200);
            expect(response.body.data.project.title).toBe('test-Updated Project Title');
        });
    });

    describe('DELETE /api/v1/projects/:id', () => {
        it('should soft delete project', async () => {
            const response = await request(app)
                .delete(`/api/v1/projects/${projectId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(204);

            // Verify soft delete
            const deleted = await prisma.project.findFirst({ where: { id: projectId } });
            expect(deleted?.deleted_at).not.toBeNull();
        });
    });
});
