import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';

const extractCookie = (response: request.Response, name: string): string | undefined => {
    const raw = response.headers['set-cookie'];
    const cookies: string[] = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const match = cookies.find((c) => c.startsWith(`${name}=`));
    if (!match) return undefined;
    return match.split(';')[0]!.substring(name.length + 1);
};

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
        it('should register a new user and set auth cookies', async () => {
            const response = await request(app)
                .post('/api/v1/auth/register')
                .send(testUser);

            expect(response.status).toBe(201);
            expect(response.body.status).toBe('success');
            expect(response.body.data.user.email).toBe(testUser.email);

            accessToken = extractCookie(response, 'accessToken')!;
            refreshToken = extractCookie(response, 'refreshToken')!;
            expect(accessToken).toBeDefined();
            expect(refreshToken).toBeDefined();
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
        });
    });

    describe('POST /api/v1/auth/login', () => {
        it('should login and set auth cookies', async () => {
            const response = await request(app)
                .post('/api/v1/auth/login')
                .send({
                    email: testUser.email,
                    password: testUser.password
                });

            expect(response.status).toBe(200);
            expect(extractCookie(response, 'accessToken')).toBeDefined();
            expect(extractCookie(response, 'refreshToken')).toBeDefined();
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
        it('should return new tokens using the refresh cookie', async () => {
            const response = await request(app)
                .post('/api/v1/auth/refresh')
                .set('Cookie', `refreshToken=${refreshToken}`);

            expect(response.status).toBe(200);
            expect(extractCookie(response, 'accessToken')).toBeDefined();
            expect(extractCookie(response, 'refreshToken')).toBeDefined();
        });

        it('should return 401 with invalid refresh token', async () => {
            const response = await request(app)
                .post('/api/v1/auth/refresh')
                .send({ refreshToken: 'invalid-refresh-token' });

            expect(response.status).toBe(401);
        });
    });

    describe('POST /api/v1/auth/logout', () => {
        it('should clear auth cookies', async () => {
            const response = await request(app).post('/api/v1/auth/logout');

            expect(response.status).toBe(200);
            expect(response.body.status).toBe('success');
        });
    });
});
