import request from 'supertest';
import { createApp } from '../../src/app';
import { prisma } from '../../src/data/prisma.client';
import * as bcrypt from 'bcrypt';
import path from 'path';
import fs from 'fs';

describe('File Upload Integration Tests', () => {
    let app: any;
    let adminToken: string;
    const testFilePath = path.join(__dirname, '../fixtures/test-image.png');
    const testPdfPath = path.join(__dirname, '../fixtures/test-cv.pdf');

    beforeAll(async () => {
        app = createApp();

        // Create admin user and get token
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await prisma.user.upsert({
            where: { email: 'admin-upload@example.com' },
            update: {},
            create: {
                email: 'admin-upload@example.com',
                password: hashedPassword,
                name: 'Upload Admin',
                role: 'ADMIN',
            },
        });

        const loginRes = await request(app).post('/api/v1/auth/login').send({
            email: 'admin-upload@example.com',
            password: 'admin123',
        });
        adminToken = loginRes.body.data.tokens.accessToken;

        // Ensure fixtures exist
        if (!fs.existsSync(path.dirname(testFilePath))) {
            fs.mkdirSync(path.dirname(testFilePath), { recursive: true });
        }
        if (!fs.existsSync(testFilePath)) {
            fs.writeFileSync(testFilePath, 'dummy image content');
        }
        if (!fs.existsSync(testPdfPath)) {
            fs.writeFileSync(testPdfPath, '%PDF-1.4 dummy content');
        }
    });

    afterAll(async () => {
        await prisma.user.deleteMany({ where: { email: 'admin-upload@example.com' } });
        // Clean up test uploads
        if (fs.existsSync('uploads/images/test-image-*.png')) {
            // Note: cleaning up dynamically named files is tricky in tests, 
            // but for simplicity in this env we'll leave it or use a specific test folder.
        }
    });

    describe('POST /api/v1/uploads/image', () => {
        it('should upload a valid image and return paths', async () => {
            const res = await request(app)
                .post('/api/v1/uploads/image')
                .set('Authorization', `Bearer ${adminToken}`)
                .attach('image', testFilePath);

            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);
            expect(res.body.data.url).toContain('/uploads/images/image-');
            expect(fs.existsSync(res.body.data.path)).toBe(true);
        });

        it('should reject non-image files', async () => {
            const res = await request(app)
                .post('/api/v1/uploads/image')
                .set('Authorization', `Bearer ${adminToken}`)
                .attach('image', testPdfPath);

            expect(res.status).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.message).toContain('Only JPEG, PNG and WEBP images are allowed');
        });
    });

    describe('POST /api/v1/uploads/cv', () => {
        it('should upload a valid PDF and return paths', async () => {
            const res = await request(app)
                .post('/api/v1/uploads/cv')
                .set('Authorization', `Bearer ${adminToken}`)
                .attach('cv', testPdfPath);

            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);
            expect(res.body.data.url).toContain('/uploads/cvs/cv-');
            expect(fs.existsSync(res.body.data.path)).toBe(true);
        });
    });

    describe('Static File Serving', () => {
        it('should serve uploaded files statically', async () => {
            // First upload
            const uploadRes = await request(app)
                .post('/api/v1/uploads/image')
                .set('Authorization', `Bearer ${adminToken}`)
                .attach('image', testFilePath);

            const fileUrl = uploadRes.body.data.url;

            // Then try to GET it
            const getRes = await request(app).get(fileUrl);
            expect(getRes.status).toBe(200);
        });
    });
});
