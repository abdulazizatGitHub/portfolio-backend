import { Request, Response } from 'express';
import * as authService from '@core/services/auth.service';
import { AuthenticatedRequest } from '@core/types/auth.types';

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response) => {
    const result = await authService.register(req.body);

    res.status(201).json({
        status: 'success',
        data: result,
    });
};

/**
 * Login user
 */
export const login = async (req: Request, res: Response) => {
    const result = await authService.login(req.body);

    res.status(200).json({
        status: 'success',
        data: result,
    });
};

/**
 * Refresh tokens
 */
export const refresh = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const tokens = await authService.refresh(refreshToken);

    res.status(200).json({
        status: 'success',
        data: tokens,
    });
};

/**
 * Get current user
 */
export const me = async (req: AuthenticatedRequest, res: Response) => {
    // req.user is set by authenticate middleware
    const user = await authService.validateUser(req.user!.id);

    res.status(200).json({
        status: 'success',
        data: { user },
    });
};
