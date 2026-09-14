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
 * Restricted User structure for public responses
 */
export interface UserResponse {
    id: string;
    email: string;
    name: string;
    role: Role;
}

/**
 * Response for login/register
 */
export interface AuthResponse {
    user: UserResponse;
    tokens: TokenPair;
}

/**
 * Express Request with user attached by auth middleware
 */
export interface AuthenticatedRequest extends Request {
    user?: Omit<User, 'password'>;
}
