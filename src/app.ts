import express, { Application } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { config } from '@core/config/env.config';
import { logger, morganStream } from '@utils/logger';
import {
    errorHandler,
    notFoundHandler,
} from '@api/middlewares/error.middleware';
import { healthCheck } from '@api/health.controller';
import authRoutes from '@api/auth/auth.routes';
import categoryRoutes from '@api/categories/category.routes';
import skillRoutes from '@api/skills/skill.routes';
import projectRoutes from '@api/projects/project.routes';
import personalRoutes from '@api/personal/personal.routes';
import aboutRoutes from '@api/about/about.routes';
import timelineRoutes from '@api/timeline/timeline.routes';
import contactRoutes from '@api/contact/contact.routes';

/**
 * Create and configure Express application
 */
export const createApp = (): Application => {
    const app = express();

    // ====================
    // Security Middleware
    // ====================

    // Helmet - Security headers
    app.use(helmet());

    // CORS - Cross-Origin Resource Sharing
    app.use(
        cors({
            origin: config.env.CORS_ORIGIN,
            credentials: true,
        })
    );

    // Rate Limiting
    const limiter = rateLimit({
        windowMs: config.env.RATE_LIMIT_WINDOW_MS,
        max: config.env.RATE_LIMIT_MAX_REQUESTS,
        message: 'Too many requests from this IP, please try again later.',
        standardHeaders: true,
        legacyHeaders: false,
    });
    app.use(limiter);

    // ====================
    // Body Parsing
    // ====================

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // ====================
    // Logging
    // ====================

    // HTTP request logging with Morgan
    const morganFormat = config.isDevelopment ? 'dev' : 'combined';
    app.use(morgan(morganFormat, { stream: morganStream }));

    // ====================
    // Routes
    // ====================

    // Health check endpoint
    app.get('/health', healthCheck);

    // API routes
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/categories', categoryRoutes);
    app.use('/api/v1/skills', skillRoutes);
    app.use('/api/v1/projects', projectRoutes);
    app.use('/api/v1/personal', personalRoutes);
    app.use('/api/v1/about', aboutRoutes);
    app.use('/api/v1/timeline', timelineRoutes);
    app.use('/api/v1/contact', contactRoutes);

    // API routes will be added here in future phases
    // app.use('/api/v1', apiRoutes);

    // ====================
    // Error Handling
    // ====================

    // 404 handler
    app.use(notFoundHandler);

    // Global error handler (must be last)
    app.use(errorHandler);

    logger.info('✅ Express application configured');

    return app;
};
