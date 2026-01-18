import { PrismaClient } from '@prisma/client';
import { logger } from '@utils/logger';

/**
 * PrismaClient singleton instance
 * Ensures only one instance is created across the application
 */
declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

/**
 * Create Prisma client with logging configuration
 */
const createPrismaClient = (): PrismaClient => {
    const prismaClient = new PrismaClient({
        log: [
            { emit: 'event', level: 'query' },
            { emit: 'event', level: 'error' },
            { emit: 'event', level: 'warn' },
        ],
    });

    // Log queries in development
    if (process.env.NODE_ENV === 'development') {
        prismaClient.$on('query', (e) => {
            logger.debug(`Query: ${e.query} - Params: ${e.params} - Duration: ${e.duration}ms`);
        });
    }

    // Log errors
    prismaClient.$on('error', (e) => {
        logger.error(`Prisma error: ${e.message}`, { target: e.target });
    });

    // Log warnings
    prismaClient.$on('warn', (e) => {
        logger.warn(`Prisma warning: ${e.message}`);
    });

    return prismaClient;
};

/**
 * Singleton Prisma client instance
 */
export const prisma = global.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

/**
 * Connect to database
 */
export const connectDatabase = async (): Promise<void> => {
    try {
        await prisma.$connect();
        logger.info('✅ Database connected successfully');
    } catch (error) {
        logger.error('❌ Database connection failed:', error);
        throw error;
    }
};

/**
 * Disconnect from database
 */
export const disconnectDatabase = async (): Promise<void> => {
    try {
        await prisma.$disconnect();
        logger.info('Database disconnected');
    } catch (error) {
        logger.error('Error disconnecting from database:', error);
        throw error;
    }
};
