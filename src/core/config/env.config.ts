import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

/**
 * Environment variable validation schema
 */
const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),
    PORT: z.string().transform(Number).pipe(z.number().positive()).default('5000'),
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(32),
    JWT_EXPIRES_IN: z.string().default('24h'),
    JWT_REFRESH_SECRET: z.string().min(32),
    JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
    CORS_ORIGIN: z.string().default('http://localhost:3000'),
    RATE_LIMIT_WINDOW_MS: z
        .string()
        .transform(Number)
        .pipe(z.number().positive())
        .default('900000'),
    RATE_LIMIT_MAX_REQUESTS: z
        .string()
        .transform(Number)
        .pipe(z.number().positive())
        .default('100'),
    REGISTER_ENABLED: z
        .string()
        .transform((val) => val === 'true')
        .default('false'),
    GITHUB_USERNAME: z.string().default(''),
    GITHUB_TOKEN: z.string().default(''),
});

/**
 * Validates and parses environment variables
 * @throws {Error} If environment variables are invalid
 */
function validateEnv(): z.infer<typeof envSchema> {
    const result = envSchema.safeParse(process.env);

    if (!result.success) {
        console.error('❌ Invalid environment variables:', result.error.format());
        throw new Error('Environment variable validation failed');
    }

    return result.data;
}

/**
 * Application configuration object
 * Validates environment variables on initialization
 */
const env = validateEnv();

export const config = {
    env,
    isDevelopment: env.NODE_ENV === 'development',
    isProduction: env.NODE_ENV === 'production',
    isTest: env.NODE_ENV === 'test',
    isRegisterEnabled: env.NODE_ENV !== 'production' || env.REGISTER_ENABLED,
    corsOrigins: env.CORS_ORIGIN.split(',').map((origin) => origin.trim()),
} as const;
