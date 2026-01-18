import request from 'supertest';
import { Application } from 'express';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';

describe('Health Check Endpoint', () => {
    let app: Application;

    beforeAll(() => {
        app = createApp();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    describe('GET /health', () => {
        it('should return 200 and health status when database is connected', async () => {
            const response = await request(app).get('/health');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('status', 'ok');
            expect(response.body).toHaveProperty('timestamp');
            expect(response.body).toHaveProperty('uptime');
            expect(response.body).toHaveProperty('environment');
            expect(response.body).toHaveProperty('database', 'connected');

            // Validate timestamp is a valid ISO string
            expect(() => new Date(response.body.timestamp)).not.toThrow();

            // Validate uptime is a number
            expect(typeof response.body.uptime).toBe('number');
            expect(response.body.uptime).toBeGreaterThan(0);
        });

        it('should return valid JSON structure', async () => {
            const response = await request(app).get('/health').expect('Content-Type', /json/);

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                status: expect.stringMatching(/^(ok|error)$/),
                timestamp: expect.any(String),
                uptime: expect.any(Number),
                environment: expect.any(String),
                database: expect.stringMatching(/^(connected|disconnected)$/),
            });
        });
    });

    describe('404 Handler', () => {
        it('should return 404 for undefined routes', async () => {
            const response = await request(app).get('/non-existent-route');

            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('status', 'error');
            expect(response.body).toHaveProperty('code', 'ROUTE_NOT_FOUND');
            expect(response.body).toHaveProperty('message');
            expect(response.body.message).toContain('/non-existent-route');
        });
    });

    describe('Error Handling', () => {
        it('should return standardized error response format', async () => {
            const response = await request(app).get('/non-existent-route');

            expect(response.body).toMatchObject({
                status: 'error',
                code: expect.any(String),
                message: expect.any(String),
            });
        });
    });

    describe('Security Headers', () => {
        it('should include Helmet security headers', async () => {
            const response = await request(app).get('/health');

            // Helmet sets various security headers
            expect(response.headers).toHaveProperty('x-content-type-options', 'nosniff');
            expect(response.headers).toHaveProperty('x-frame-options');
        });
    });

    describe('CORS', () => {
        it('should include CORS headers', async () => {
            const response = await request(app)
                .get('/health')
                .set('Origin', 'http://localhost:3000');

            expect(response.headers).toHaveProperty('access-control-allow-origin');
        });
    });
});
