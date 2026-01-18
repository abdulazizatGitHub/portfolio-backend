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
export const config = {
    env: validateEnv(),
    isDevelopment: validateEnv().NODE_ENV === 'development',
    isProduction: validateEnv().NODE_ENV === 'production',
    isTest: validateEnv().NODE_ENV === 'test',
} as const;
