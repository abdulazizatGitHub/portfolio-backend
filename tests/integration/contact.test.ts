import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as tokenService from '../../src/core/services/token.service';
import { Role } from '../../src/data/prisma.client';

describe('Contact & Socials Integration', () => {
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
        await prisma.socialLink.deleteMany();
        await prisma.contactInfoItem.deleteMany();
        await prisma.contactContent.deleteMany();
    });

    afterAll(async () => {
        await prisma.socialLink.deleteMany();
        await prisma.contactInfoItem.deleteMany();
        await prisma.contactContent.deleteMany();
        await prisma.$disconnect();
    });

    describe('GET /api/v1/contact', () => {
        it('should return 404 if no content initialized', async () => {
            const res = await request(app).get('/api/v1/contact');
            expect(res.status).toBe(404);
        });
    });

    describe('Admin Management', () => {
        it('should initialize contact metadata', async () => {
            const res = await request(app)
                .put('/api/v1/contact')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    subtitle: 'Let s connect',
                    success_title: 'Message Sent!',
                    success_message: 'Your message has been received successfully.'
                });

            expect(res.status).toBe(200);
            expect(res.body.data.subtitle).toBe('Let s connect');
        });

        it('should manage info items', async () => {
            // Create
            const createRes = await request(app)
                .post('/api/v1/contact/info')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    type: 'email',
                    label: 'Email',
                    value: 'test@example.com',
                    order_index: 0
                });

            expect(createRes.status).toBe(201);
            const itemId = createRes.body.data.id;

            // Retrieval
            const getRes = await request(app).get('/api/v1/contact');
            expect(getRes.body.data.infoItems).toHaveLength(1);

            // Delete
            await request(app)
                .delete(`/api/v1/contact/info/${itemId}`)
                .set('Authorization', `Bearer ${adminToken}`);
        });

        it('should manage social links', async () => {
            // Create
            const createRes = await request(app)
                .post('/api/v1/contact/socials')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({
                    platform: 'LinkedIn',
                    url: 'https://linkedin.com/in/test'
                });

            expect(createRes.status).toBe(201);
            const linkId = createRes.body.data.id;

            // Identification check
            expect(createRes.body.data.platform).toBe('LinkedIn');

            // Delete
            await request(app)
                .delete(`/api/v1/contact/socials/${linkId}`)
                .set('Authorization', `Bearer ${adminToken}`);
        });
    });
});
