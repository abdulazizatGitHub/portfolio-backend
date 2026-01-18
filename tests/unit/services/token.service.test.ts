import * as tokenService from '../../../src/core/services/token.service';
import { Role } from '../../../src/data/prisma.client';
import { UnauthorizedError } from '../../../src/core/exceptions/app-errors';

describe('Token Service', () => {
    const userId = 'user-123';
    const email = 'test@example.com';
    const role = Role.ADMIN;

    describe('generateAccessToken', () => {
        it('should generate a valid JWT access token', () => {
            const token = tokenService.generateAccessToken({ sub: userId, email, role });
            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
        });
    });

    describe('verifyAccessToken', () => {
        it('should verify a valid access token and return payload', () => {
            const token = tokenService.generateAccessToken({ sub: userId, email, role });
            const payload = tokenService.verifyAccessToken(token);
            expect(payload.sub).toBe(userId);
            expect(payload.email).toBe(email);
            expect(payload.role).toBe(role);
        });

        it('should throw UnauthorizedError for invalid token', () => {
            expect(() => tokenService.verifyAccessToken('invalid-token')).toThrow(UnauthorizedError);
        });
    });

    describe('generateTokenPair', () => {
        it('should generate both access and refresh tokens', () => {
            const tokens = tokenService.generateTokenPair(userId, email, role);
            expect(tokens.accessToken).toBeDefined();
            expect(tokens.refreshToken).toBeDefined();
        });
    });
});
