import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('Skill Integration Tests', () => {
    let app: Application;
    let adminToken: string;

    beforeAll(async () => {
        app = createApp();

        // Clean up
        await prisma.skill.deleteMany({ where: { name: { startsWith: 'Test' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });

        // Create admin
        const admin = await prisma.user.create({
            data: {
                email: 'test-admin-skill@example.com',
                password: 'hashed',
                name: 'Admin',
                role: Role.ADMIN
            }
        });
        adminToken = tokenService.generateAccessToken({ sub: admin.id, email: admin.email, role: admin.role });
    });

    afterAll(async () => {
        await prisma.skill.deleteMany({ where: { name: { startsWith: 'Test' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });
        await prisma.$disconnect();
    });

    let skillId: string;
    let skillSlug: string;

    describe('POST /api/v1/skills', () => {
        it('should create a skill when authenticated as admin', async () => {
            const response = await request(app)
                .post('/api/v1/skills')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    name: 'Test Skill One',
                    slug: 'test-skill-one',
                    category: 'Frontend',
                    icon_url: 'https://example.com/icon.png'
                });

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.data.name).toBe('Test Skill One');
            skillId = response.body.data.id;
            skillSlug = response.body.data.slug;
        });

        it('should auto-generate slug if not provided', async () => {
            const response = await request(app)
                .post('/api/v1/skills')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Test Auto Skill' });

            expect(response.status).toBe(201);
            expect(response.body.data.slug).toBe('test-auto-skill');
        });

        it('should return 422 for invalid slug format', async () => {
            const response = await request(app)
                .post('/api/v1/skills')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    name: 'Test Skill Fail',
                    slug: 'INVALID SLUG'
                });

            expect(response.status).toBe(422);
        });
    });

    describe('GET /api/v1/skills', () => {
        it('should return skills with pagination and meta', async () => {
            const response = await request(app).get('/api/v1/skills?page=1&limit=2');
            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.body.meta).toBeDefined();
            expect(response.body.meta.page).toBe(1);
        });

        it('should support category filter', async () => {
            const response = await request(app).get('/api/v1/skills?category=Frontend');
            expect(response.status).toBe(200);
            expect(response.body.data.every((s: any) => s.category === 'Frontend')).toBe(true);
        });

        it('should support search', async () => {
            const response = await request(app).get('/api/v1/skills?search=One');
            expect(response.status).toBe(200);
            expect(response.body.data.some((s: any) => s.name.includes('One'))).toBe(true);
        });
    });

    describe('GET /api/v1/skills/:id', () => {
        it('should return a single skill', async () => {
            const response = await request(app).get(`/api/v1/skills/${skillId}`);
            expect(response.status).toBe(200);
            expect(response.body.data.id).toBe(skillId);
        });
    });

    describe('GET /api/v1/skills/slug/:slug', () => {
        it('should return a single skill by slug', async () => {
            const response = await request(app).get(`/api/v1/skills/slug/${skillSlug}`);
            expect(response.status).toBe(200);
            expect(response.body.data.slug).toBe(skillSlug);
        });
    });

    describe('PATCH /api/v1/skills/:id', () => {
        it('should update a skill as admin', async () => {
            const response = await request(app)
                .patch(`/api/v1/skills/${skillId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Test Updated Skill' });

            expect(response.status).toBe(200);
            expect(response.body.data.name).toBe('Test Updated Skill');
        });
    });

    describe('DELETE /api/v1/skills/:id', () => {
        it('should delete a skill as admin', async () => {
            const response = await request(app)
                .delete(`/api/v1/skills/${skillId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(204);

            const check = await request(app).get(`/api/v1/skills/${skillId}`);
            expect(check.status).toBe(404);
        });
    });
});
