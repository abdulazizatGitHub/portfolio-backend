import { z } from 'zod';
import { Role } from '@data/prisma.client';

/**
 * Common password validation
 */
const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

/**
 * Register Schema
 */
export const registerSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email address'),
        password: passwordSchema,
        name: z.string().min(2, 'Name must be at least 2 characters'),
        role: z.nativeEnum(Role).optional(),
    }),
});

/**
 * Login Schema
 */
export const loginSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(1, 'Password is required'),
    }),
});

/**
 * Refresh Token Schema
 */
export const refreshSchema = z.object({
    body: z.object({
        refreshToken: z.string({
            required_error: 'Refresh token is required',
        }),
    }),
});

export type RegisterRequest = z.infer<typeof registerSchema>['body'];
export type LoginRequest = z.infer<typeof loginSchema>['body'];
export type RefreshRequest = z.infer<typeof refreshSchema>['body'];
