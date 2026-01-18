import jwt from 'jsonwebtoken';
import { config } from '@core/config/env.config';
import { TokenPayload, TokenPair } from '../types/auth.types';
import { Role } from '@data/prisma.client';
import { UnauthorizedError } from '../exceptions/app-errors';

/**
 * Token Service
 * Handles JWT generation and verification
 */

/**
 * Generate an Access Token
 */
export const generateAccessToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.env.JWT_SECRET, {
        expiresIn: config.env.JWT_EXPIRES_IN as any,
    });
};

/**
 * Generate a Refresh Token
 */
export const generateRefreshToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.env.JWT_REFRESH_SECRET, {
        expiresIn: config.env.JWT_REFRESH_EXPIRES_IN as any,
    });
};

/**
 * Verify an Access Token
 */
export const verifyAccessToken = (token: string): TokenPayload => {
    try {
        return jwt.verify(token, config.env.JWT_SECRET) as TokenPayload;
    } catch (error) {
        throw new UnauthorizedError('Invalid access token', 'INVALID_ACCESS_TOKEN');
    }
};

/**
 * Verify a Refresh Token
 */
export const verifyRefreshToken = (token: string): TokenPayload => {
    try {
        return jwt.verify(token, config.env.JWT_REFRESH_SECRET) as TokenPayload;
    } catch (error) {
        throw new UnauthorizedError('Invalid refresh token', 'INVALID_REFRESH_TOKEN');
    }
};

/**
 * Generate both Access and Refresh tokens
 */
export const generateTokenPair = (
    userId: string,
    email: string,
    role: Role
): TokenPair => {
    const payload: TokenPayload = { sub: userId, email, role };
    return {
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload),
    };
};
