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
                    short_description: 'A short project description',
                    description: 'A very cool test project description',
                    category_id: categoryId,
                    skill_ids: [skillId],
                    is_published: true
                });

            expect(response.status).toBe(201);
            expect(response.body.status).toBe('success');
            expect(response.body.data.title).toBe('test-Project');
            projectId = response.body.data.id;
        });

        it('should return 400 if category does not exist', async () => {
            const response = await request(app)
                .post('/api/v1/projects')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    title: 'test-Fail Category',
                    short_description: 'A short project description',
                    description: 'A very cool test project description',
                    category_id: '00000000-0000-0000-0000-000000000000'
                });

            expect(response.status).toBe(400);
            expect(response.body.code).toBe('RELATION_NOT_FOUND');
        });
    });

    describe('GET /api/v1/projects', () => {
        it('should return projects with pagination and filters', async () => {
            const response = await request(app)
                .get('/api/v1/projects')
                .query({ page: 1, limit: 10, category_id: categoryId });

            expect(response.status).toBe(200);
            expect(response.body.status).toBe('success');
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.body.meta.total).toBeGreaterThan(0);
        });

        it('should support search', async () => {
            const response = await request(app).get('/api/v1/projects?search=Project');
            expect(response.status).toBe(200);
            expect(response.body.data.some((p: any) => p.title.includes('Project'))).toBe(true);
        });

        it('should actually filter by is_published=true and exclude unpublished projects', async () => {
            const unpublished = await request(app)
                .post('/api/v1/projects')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    title: 'test-Unpublished Filter Project',
                    short_description: 'Should not appear when is_published=true',
                    description: 'Should not appear when is_published=true is requested',
                    category_id: categoryId,
                    is_published: false,
                });
            expect(unpublished.status).toBe(201);

            const response = await request(app).get('/api/v1/projects?is_published=true&limit=100');
            expect(response.status).toBe(200);
            expect(
                response.body.data.every((p: any) => p.is_published === true)
            ).toBe(true);
            expect(
                response.body.data.some((p: any) => p.id === unpublished.body.data.id)
            ).toBe(false);
        });

        it('should filter by is_published=false to only return unpublished projects', async () => {
            const response = await request(app).get('/api/v1/projects?is_published=false&limit=100');
            expect(response.status).toBe(200);
            expect(
                response.body.data.every((p: any) => p.is_published === false)
            ).toBe(true);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        it('should filter by featured=true', async () => {
            const featuredProject = await request(app)
                .post('/api/v1/projects')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    title: 'test-Featured Filter Project',
                    short_description: 'Should appear when featured=true',
                    description: 'Should appear when featured=true is requested',
                    category_id: categoryId,
                    featured: true,
                });
            expect(featuredProject.status).toBe(201);

            const response = await request(app).get('/api/v1/projects?featured=true&limit=100');
            expect(response.status).toBe(200);
            expect(response.body.data.length).toBeGreaterThan(0);
            expect(response.body.data.every((p: any) => p.featured === true)).toBe(true);
            expect(
                response.body.data.some((p: any) => p.id === featuredProject.body.data.id)
            ).toBe(true);
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
            expect(response.body.data.title).toBe('test-Updated Project Title');
        });
    });

    describe('Soft Delete and Restore', () => {
        it('should soft delete project', async () => {
            const response = await request(app)
                .delete(`/api/v1/projects/${projectId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(204);

            const deleted = await prisma.project.findFirst({ where: { id: projectId } });
            expect(deleted?.deleted_at).not.toBeNull();
        });

        it('should restore project', async () => {
            const response = await request(app)
                .patch(`/api/v1/projects/${projectId}/restore`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.data.deleted_at).toBeNull();
        });
    });
});
