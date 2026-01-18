import { Request } from 'express';
import { User, Role } from '@data/prisma.client';

/**
 * JWT Payload structure
 */
export interface TokenPayload {
    sub: string;
    email: string;
    role: Role;
}

/**
 * Access and Refresh token pair
 */
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
}

/**
 * Response for login/register
 */
export interface AuthResponse {
    user: Omit<User, 'password'>;
    tokens: TokenPair;
}

/**
 * Express Request with user attached by auth middleware
 */
export interface AuthenticatedRequest extends Request {
    user?: Omit<User, 'password'>;
}
