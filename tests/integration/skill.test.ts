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
        await prisma.skill.deleteMany({ where: { slug: { startsWith: 'test-' } } });
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
        await prisma.skill.deleteMany({ where: { slug: { startsWith: 'test-' } } });
        await prisma.user.deleteMany({ where: { email: { startsWith: 'test-' } } });
        await prisma.$disconnect();
    });

    let skillId: string;

    describe('POST /api/v1/skills', () => {
        it('should create a skill when authenticated as admin', async () => {
            const response = await request(app)
                .post('/api/v1/skills')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    name: 'Test Skill',
                    slug: 'test-skill',
                    category: 'Frontend',
                    icon_url: 'https://example.com/icon.png'
                });

            expect(response.status).toBe(201);
            expect(response.body.data.skill.name).toBe('Test Skill');
            skillId = response.body.data.skill.id;
        });

        it('should return 422 for invalid slug', async () => {
            const response = await request(app)
                .post('/api/v1/skills')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    name: 'Test Skill',
                    slug: 'INVALID SLUG'
                });

            expect(response.status).toBe(422);
        });
    });

    describe('GET /api/v1/skills', () => {
        it('should return all skills publicly', async () => {
            const response = await request(app).get('/api/v1/skills');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.data.skills)).toBe(true);
        });
    });

    describe('GET /api/v1/skills/:id', () => {
        it('should return a single skill publicly', async () => {
            const response = await request(app).get(`/api/v1/skills/${skillId}`);
            expect(response.status).toBe(200);
            expect(response.body.data.skill.id).toBe(skillId);
        });
    });

    describe('PATCH /api/v1/skills/:id', () => {
        it('should update a skill as admin', async () => {
            const response = await request(app)
                .patch(`/api/v1/skills/${skillId}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ name: 'Updated Skill Name' });

            expect(response.status).toBe(200);
            expect(response.body.data.skill.name).toBe('Updated Skill Name');
        });
    });

    describe('DELETE /api/v1/skills/:id', () => {
        it('should delete a skill as admin', async () => {
            const response = await request(app)
                .delete(`/api/v1/skills/${skillId}`)
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(204);
        });
    });
});
