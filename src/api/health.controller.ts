import { Request, Response, NextFunction } from 'express';
import { prisma } from '@data/prisma.client';
import { logger } from '@utils/logger';

/**
 * Health check response interface
 */
interface HealthCheckResponse {
    status: 'ok' | 'error';
    timestamp: string;
    uptime: number;
    environment: string;
    database: 'connected' | 'disconnected';
}

/**
 * Health check controller
 * Verifies application and database health
 *
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const healthCheck = async (
    _req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        // Check database connection
        await prisma.$queryRaw`SELECT 1`;

        const healthResponse: HealthCheckResponse = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            database: 'connected',
        };

        logger.info('Health check passed');
        res.status(200).json(healthResponse);
    } catch (error) {
        logger.error('Health check failed:', error);

        const healthResponse: HealthCheckResponse = {
            status: 'error',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            database: 'disconnected',
        };

        res.status(503).json(healthResponse);
    }
};
