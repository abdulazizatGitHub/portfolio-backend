import { Router } from 'express';
import * as authController from './auth.controller';
import { registerSchema, loginSchema, refreshSchema } from './auth.schemas';
import { validate } from '@api/middlewares/validate.middleware';
import { authenticate } from '@api/middlewares/auth.middleware';

const router = Router();

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register a new user
 * @access  Public (or Admin only depending on requirements, here Public for bootstrap)
 */
router.post('/register', validate(registerSchema), authController.register);

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user and return tokens
 * @access  Public
 */
router.post('/login', validate(loginSchema), authController.login);

/**
 * @route   POST /api/v1/auth/refresh
 * @desc    Refresh access token
 * @access  Public (requires valid refresh token in body)
 */
router.post('/refresh', validate(refreshSchema), authController.refresh);

/**
 * @route   GET /api/v1/auth/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', authenticate, authController.me);

export default router;
