import * as userRepository from '@data/repositories/user.repository';
import * as passwordService from './password.service';
import * as tokenService from './token.service';
import {
    AuthResponse,
    TokenPair,
} from '../types/auth.types';
import {
    UnauthorizedError,
    ConflictError,
    NotFoundError,
} from '../exceptions/app-errors';
import { Role } from '@data/prisma.client';
import { z } from 'zod';

/**
 * Register Schema (internal use for type safety if needed, 
 * but primarily handled by controller schemas)
 */
export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
    role: z.nativeEnum(Role).optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;

/**
 * Login Schema
 */
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type LoginInput = z.infer<typeof loginSchema>;

/**
 * Auth Service
 * Business logic for authentication
 */

/**
 * Register a new user
 */
export const register = async (data: RegisterInput): Promise<AuthResponse> => {
    // Check if user already exists
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
        throw new ConflictError('Email already in use', 'EMAIL_ALREADY_EXISTS');
    }

    // Hash password
    const hashedPassword = await passwordService.hashPassword(data.password);

    // Create user
    const user = await userRepository.create({
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: (data.role as Role) || Role.VIEWER,
    });

    // Generate tokens
    const tokens = tokenService.generateTokenPair(user.id, user.email, user.role);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return {
        user: userWithoutPassword,
        tokens,
    };
};

/**
 * Login user
 */
export const login = async (data: LoginInput): Promise<AuthResponse> => {
    // Find user
    const user = await userRepository.findByEmail(data.email);
    if (!user) {
        throw new UnauthorizedError('Invalid credentials', 'INVALID_CREDENTIALS');
    }

    // Verify password
    const isPasswordValid = await passwordService.verifyPassword(
        data.password,
        user.password
    );
    if (!isPasswordValid) {
        throw new UnauthorizedError('Invalid credentials', 'INVALID_CREDENTIALS');
    }

    // Generate tokens
    const tokens = tokenService.generateTokenPair(user.id, user.email, user.role);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return {
        user: userWithoutPassword,
        tokens,
    };
};

/**
 * Refresh tokens
 */
export const refresh = async (refreshToken: string): Promise<TokenPair> => {
    // Verify refresh token
    const payload = tokenService.verifyRefreshToken(refreshToken);

    // Find user to ensure they still exist and check roles if needed
    const user = await userRepository.findById(payload.sub);
    if (!user) {
        throw new UnauthorizedError('User no longer exists', 'USER_NOT_FOUND');
    }

    // Generate new token pair
    return tokenService.generateTokenPair(user.id, user.email, user.role);
};

/**
 * Validate user exists and get data
 */
export const validateUser = async (userId: string) => {
    const user = await userRepository.findById(userId);
    if (!user) {
        throw new NotFoundError('User not found', 'USER_NOT_FOUND');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
