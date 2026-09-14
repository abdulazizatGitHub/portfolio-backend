import { Request, Response } from 'express';
import * as authService from '@core/services/auth.service';
import { AuthenticatedRequest } from '@core/types/auth.types';
import { sendSuccess } from '../../utils/response';
import { config } from '@core/config/env.config';
import { ForbiddenError } from '@core/exceptions/app-errors';

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const, // Lax is better for initial loads/redirects
    path: '/',
};

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response) => {
    if (!config.isRegisterEnabled) {
        throw new ForbiddenError('Registration is disabled', 'REGISTRATION_DISABLED');
    }

    const result = await authService.register(req.body);

    res.cookie('accessToken', result.tokens.accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.cookie('refreshToken', result.tokens.refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    sendSuccess(res, 'User registered successfully', { user: result.user }, 201);
};

/**
 * Login user
 */
export const login = async (req: Request, res: Response) => {
    const result = await authService.login(req.body);

    res.cookie('accessToken', result.tokens.accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.cookie('refreshToken', result.tokens.refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    sendSuccess(res, 'Login successful', { user: result.user });
};

/**
 * Refresh tokens
 */
export const refresh = async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            status: 'error',
            message: 'Refresh token not found',
        });
    }

    const tokens = await authService.refresh(refreshToken);

    res.cookie('accessToken', tokens.accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.cookie('refreshToken', tokens.refreshToken, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return sendSuccess(res, 'Token refreshed successfully', null);
};

/**
 * Logout user
 */
export const logout = async (_req: Request, res: Response) => {
    res.clearCookie('accessToken', cookieOptions);
    res.clearCookie('refreshToken', cookieOptions);

    sendSuccess(res, 'Logged out successfully', null);
};

/**
 * Get current user
 */
export const me = async (req: AuthenticatedRequest, res: Response) => {
    // req.user is set by authenticate middleware
    const user = await authService.validateUser(req.user!.id);

    sendSuccess(res, 'User profile retrieved', { user });
};
