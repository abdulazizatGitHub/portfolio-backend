import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';

describe('Auth Integration Tests', () => {
    let app: Application;

    beforeAll(async () => {
        app = createApp();
        // Clean up users before tests
        await prisma.user.deleteMany({
            where: { email: { startsWith: 'test-' } }
        });
    });

    afterAll(async () => {
        await prisma.user.deleteMany({
            where: { email: { startsWith: 'test-' } }
        });
        await prisma.$disconnect();
    });

    const testUser = {
        email: 'test-auth@example.com',
        password: 'Password123!',
        name: 'Auth Test User'
    };

    let accessToken: string;
    let refreshToken: string;

    describe('POST /api/v1/auth/register', () => {
        it('should register a new user and return tokens', async () => {
            const response = await request(app)
                .post('/api/v1/auth/register')
                .send(testUser);

            expect(response.status).toBe(201);
            expect(response.body.status).toBe('success');
            expect(response.body.data.user.email).toBe(testUser.email);
            expect(response.body.data.tokens.accessToken).toBeDefined();
            expect(response.body.data.tokens.refreshToken).toBeDefined();

            accessToken = response.body.data.tokens.accessToken;
            refreshToken = response.body.data.tokens.refreshToken;
        });

        it('should return 409 if email already exists', async () => {
            const response = await request(app)
                .post('/api/v1/auth/register')
                .send(testUser);

            expect(response.status).toBe(409);
        });

        it('should return 422 for invalid input (Zod validation)', async () => {
            const response = await request(app)
                .post('/api/v1/auth/register')
                .send({ email: 'invalid-email' });

            expect(response.status).toBe(422);
            expect(response.body.status).toBe('error');
            expect(response.body.code).toBe('VALIDATION_ERROR');
        });
    });

    describe('POST /api/v1/auth/login', () => {
        it('should login and return tokens', async () => {
            const response = await request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: testUser.email,
                    password: testUser.password
                });

            expect(response.status).toBe(200);
            expect(response.body.data.tokens.accessToken).toBeDefined();
        });

        it('should return 401 for invalid credentials', async () => {
            const response = await request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: testUser.email,
                    password: 'wrong-password'
                });

            expect(response.status).toBe(401);
        });
    });

    describe('GET /api/v1/auth/me', () => {
        it('should return current user data if authenticated', async () => {
            const response = await request(app)
                .get('/api/v1/auth/me')
                .set('Authorization', `Bearer ${accessToken}`);

            expect(response.status).toBe(200);
            expect(response.body.data.user.email).toBe(testUser.email);
        });

        it('should return 401 if not authenticated', async () => {
            const response = await request(app)
                .get('/api/v1/auth/me');

            expect(response.status).toBe(401);
        });
    });

    describe('POST /api/v1/auth/refresh', () => {
        it('should return new tokens with valid refresh token', async () => {
            const response = await request(app)
                .post('/api/v1/auth/refresh')
                .send({ refreshToken });

            expect(response.status).toBe(200);
            expect(response.body.data.accessToken).toBeDefined();
            expect(response.body.data.refreshToken).toBeDefined();
        });

        it('should return 401 with invalid refresh token', async () => {
            const response = await request(app)
                .post('/api/v1/auth/refresh')
                .send({ refreshToken: 'invalid-refresh-token' });

            expect(response.status).toBe(401);
        });
    });
});
