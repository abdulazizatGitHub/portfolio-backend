import { Response, NextFunction } from 'express';
import * as tokenService from '@core/services/token.service';
import { AuthenticatedRequest } from '@core/types/auth.types';
import { UnauthorizedError, ForbiddenError } from '@core/exceptions/app-errors';
import { Role } from '@data/prisma.client';

/**
 * Authentication Middleware
 * Verifies JWT access token and attaches user to request
 */
export const authenticate = async (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new UnauthorizedError('No token provided', 'MISSING_TOKEN'));
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return next(new UnauthorizedError('Invalid token format', 'INVALID_TOKEN_FORMAT'));
    }

    try {
        const payload = tokenService.verifyAccessToken(token);

        // Attach user info to request
        req.user = {
            id: payload.sub,
            email: payload.email,
            role: payload.role,
            name: '', // Name will be fetched from DB if needed by specific services
            created_at: new Date(),
            updated_at: new Date(),
        };

        next();
    } catch (error) {
        next(error);
    }
};

/**
 * Authorization Middleware
 * Checks if user has required roles
 */
export const authorize = (...roles: Role[]) => {
    return (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
        if (!req.user) {
            return next(new UnauthorizedError('User not authenticated', 'NOT_AUTHENTICATED'));
        }

        if (!roles.includes(req.user.role as Role)) {
            return next(
                new ForbiddenError(
                    'You do not have permission to perform this action',
                    'INSUFFICIENT_PERMISSIONS'
                )
            );
        }

        next();
    };
};
