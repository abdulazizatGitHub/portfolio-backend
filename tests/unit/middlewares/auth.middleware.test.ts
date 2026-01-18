import { Response, NextFunction } from 'express';
import * as authMiddleware from '../../../src/api/middlewares/auth.middleware';
import * as tokenService from '../../../src/core/services/token.service';
import { Role } from '../../../src/data/prisma.client';
import { UnauthorizedError, ForbiddenError } from '../../../src/core/exceptions/app-errors';
import { AuthenticatedRequest } from '../../../src/core/types/auth.types';

jest.mock('../../../src/core/services/token.service');

describe('Auth Middleware', () => {
    let mockReq: Partial<AuthenticatedRequest>;
    let mockRes: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();

    beforeEach(() => {
        mockReq = {
            headers: {},
        };
        mockRes = {};
        nextFunction = jest.fn();
        jest.clearAllMocks();
    });

    describe('authenticate', () => {
        it('should call next() if valid token is provided', async () => {
            mockReq.headers!.authorization = 'Bearer valid-token';
            const payload = { sub: 'user-123', email: 'test@example.com', role: Role.ADMIN };
            (tokenService.verifyAccessToken as jest.Mock).mockReturnValue(payload);

            await authMiddleware.authenticate(mockReq as AuthenticatedRequest, mockRes as Response, nextFunction);

            expect(nextFunction).toHaveBeenCalledWith();
            expect(mockReq.user?.id).toBe(payload.sub);
        });

        it('should throw UnauthorizedError if no token provided', async () => {
            await authMiddleware.authenticate(mockReq as AuthenticatedRequest, mockRes as Response, nextFunction);

            expect(nextFunction).toHaveBeenCalledWith(expect.any(UnauthorizedError));
        });

        it('should throw UnauthorizedError if token is invalid', async () => {
            mockReq.headers!.authorization = 'Bearer invalid-token';
            (tokenService.verifyAccessToken as jest.Mock).mockImplementation(() => {
                throw new UnauthorizedError('Invalid token');
            });

            await authMiddleware.authenticate(mockReq as AuthenticatedRequest, mockRes as Response, nextFunction);

            expect(nextFunction).toHaveBeenCalledWith(expect.any(UnauthorizedError));
        });
    });

    describe('authorize', () => {
        it('should call next() if user has required role', () => {
            mockReq.user = {
                id: 'user-123',
                email: 'test@example.com',
                role: Role.ADMIN,
                name: 'Admin',
                created_at: new Date(),
                updated_at: new Date()
            };

            const middleware = authMiddleware.authorize(Role.ADMIN);
            middleware(mockReq as AuthenticatedRequest, mockRes as Response, nextFunction);

            expect(nextFunction).toHaveBeenCalledWith();
        });

        it('should throw ForbiddenError if user does not have required role', () => {
            mockReq.user = {
                id: 'user-123',
                email: 'test@example.com',
                role: Role.VIEWER,
                name: 'Viewer',
                created_at: new Date(),
                updated_at: new Date()
            };

            const middleware = authMiddleware.authorize(Role.ADMIN);
            middleware(mockReq as AuthenticatedRequest, mockRes as Response, nextFunction);

            expect(nextFunction).toHaveBeenCalledWith(expect.any(ForbiddenError));
        });
    });
});
