import { createApp } from './app';
import { config } from '@core/config/env.config';
import { connectDatabase, disconnectDatabase } from '@data/prisma.client';
import { logger } from '@utils/logger';

/**
 * Bootstrap the application
 */
const startServer = async (): Promise<void> => {
    try {
        // Connect to database
        await connectDatabase();

        // Create Express app
        const app = createApp();

        // Start server
        const PORT = config.env.PORT;
        const server = app.listen(PORT, () => {
            logger.info(`🚀 Server running on port ${PORT}`);
            logger.info(`📝 Environment: ${config.env.NODE_ENV}`);
            logger.info(`🏥 Health check: http://localhost:${PORT}/health`);
        });

        // Graceful shutdown
        const gracefulShutdown = async (signal: string): Promise<void> => {
            logger.info(`${signal} signal received: closing HTTP server`);

            server.close(async () => {
                logger.info('HTTP server closed');

                try {
                    await disconnectDatabase();
                    logger.info('✅ Graceful shutdown completed');
                    process.exit(0);
                } catch (error) {
                    logger.error('Error during graceful shutdown:', error);
                    process.exit(1);
                }
            });

            // Force shutdown after 10 seconds
            setTimeout(() => {
                logger.error('Could not close connections in time, forcefully shutting down');
                process.exit(1);
            }, 10000);
        };

        // Listen for termination signals
        process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
        process.on('SIGINT', () => gracefulShutdown('SIGINT'));

        // Handle uncaught exceptions
        process.on('uncaughtException', (error: Error) => {
            logger.error('Uncaught Exception:', error);
            gracefulShutdown('uncaughtException');
        });

        // Handle unhandled rejections
        process.on('unhandledRejection', (reason: unknown) => {
            logger.error('Unhandled Rejection:', reason);
            gracefulShutdown('unhandledRejection');
        });
    } catch (error) {
        logger.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Start the server
startServer();
