import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('Category Integration Tests', () => {
    let app: Application;
    let adminToken: string;
    let viewerToken: string;

    beforeAll(async () => {
        app = createApp();

        // Clean up
        await prisma.category.deleteMany({ where: { slug: { startsWith: 'test-' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });

        // Create admin user and token
        const admin = await prisma.user.create({
            data: {
                email: 'test-admin@example.com',
                password: 'hashed',
                name: 'Admin',
                role: Role.ADMIN
            }
        });
        adminToken = tokenService.generateAccessToken({ sub: admin.id, email: admin.email, role: admin.role });

        // Create viewer user and token
        const viewer = await prisma.user.create({
            data: {
                email: 'test-viewer@example.com',
                password: 'hashed',
                name: 'Viewer',
                role: Role.VIEWER
            }
        });
        viewerToken = tokenService.generateAccessToken({ sub: viewer.id, email: viewer.email, role: viewer.role });
    });

    afterAll(async () => {
        await prisma.category.deleteMany({ where: { slug: { startsWith: 'test-' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });
        await prisma.$disconnect();
    });

    let categoryId: string;
    let categorySlug: string;

    describe('POST /api/v1/categories', () => {
        it('should allow admin to create a category', async () => {
            const response = await request(app)
                .post('/api/v1/categories')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    name: 'Test Category',
                    slug: 'test-cat',
                    description: 'Description'
                });

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.data.name).toBe('Test Category');
            categoryId = response.body.data.id;
            categorySlug = response.body.data.slug;
        });

        it('should auto-generate slug if not provided', async () => {
            const response = await request(app)
                .post('/api/v1/categories')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Test Auto Slug Category' });

            expect(response.status).toBe(201);
            expect(response.body.data.slug).toBe('test-auto-slug-category');
        });

        it('should deny viewer access to create category', async () => {
            const response = await request(app)
                .post('/api/v1/categories')
                .set('Authorization', `Bearer ${viewerToken}`)
                .send({ name: 'Fail', slug: 'fail' });

            expect(response.status).toBe(403);
        });
    });

    describe('GET /api/v1/categories', () => {
        it('should return categories with pagination and meta', async () => {
            const response = await request(app).get('/api/v1/categories?page=1&limit=2');
            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.body.meta).toBeDefined();
            expect(response.body.meta.page).toBe(1);
            expect(response.body.meta.limit).toBe(2);
        });

        it('should support search', async () => {
            const response = await request(app).get('/api/v1/categories?search=Test');
            expect(response.status).toBe(200);
            expect(response.body.data.some((c: any) => c.name.includes('Test'))).toBe(true);
        });
    });

    describe('GET /api/v1/categories/:id', () => {
        it('should return a single category publicly', async () => {
            const response = await request(app).get(`/api/v1/categories/${categoryId}`);
            expect(response.status).toBe(200);
            expect(response.body.data.id).toBe(categoryId);
        });
    });

    describe('GET /api/v1/categories/slug/:slug', () => {
        it('should return a single category by slug', async () => {
            const response = await request(app).get(`/api/v1/categories/slug/${categorySlug}`);
            expect(response.status).toBe(200);
            expect(response.body.data.slug).toBe(categorySlug);
        });
    });

    describe('PATCH /api/v1/categories/:id', () => {
        it('should allow admin to update category', async () => {
            const response = await request(app)
                .patch(`/api/v1/categories/${categoryId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Updated Name' });

            expect(response.status).toBe(200);
            expect(response.body.data.name).toBe('Updated Name');
        });
    });

    describe('Soft Delete and Restore', () => {
        it('should allow admin to soft delete category', async () => {
            const response = await request(app)
                .delete(`/api/v1/categories/${categoryId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(204);

            // Verify it's not found in public list
            const check = await request(app).get(`/api/v1/categories/${categoryId}`);
            expect(check.status).toBe(404);
        });

        it('should allow admin to restore category', async () => {
            const response = await request(app)
                .patch(`/api/v1/categories/${categoryId}/restore`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.data.deleted_at).toBe(null);

            // Verify it's found again
            const check = await request(app).get(`/api/v1/categories/${categoryId}`);
            expect(check.status).toBe(200);
        });
    });
});
