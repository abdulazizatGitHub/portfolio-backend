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
import uploadRoutes from './api/uploads/upload.routes';
import dashboardRoutes from './api/dashboard/dashboard.routes';
import analyticsRoutes from './api/analytics/analytics.routes';
import { trackVisit } from './api/middlewares/analytics.middleware';
import path from 'path';

/**
 * Create and configure Express application
 */
export const createApp = (): Application => {
    const app = express();

    // Serve static files from uploads directory
    app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

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

    // Analytics (Public)
    app.use('/api/v1/analytics', analyticsRoutes);

    // Public API routes (with tracking)
    app.use('/api/v1/categories', trackVisit, categoryRoutes);
    app.use('/api/v1/skills', trackVisit, skillRoutes);
    app.use('/api/v1/projects', trackVisit, projectRoutes);
    app.use('/api/v1/personal', trackVisit, personalRoutes);
    app.use('/api/v1/about', trackVisit, aboutRoutes);
    app.use('/api/v1/timeline', trackVisit, timelineRoutes);
    app.use('/api/v1/contact', trackVisit, contactRoutes);

    // Admin API routes
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/uploads', uploadRoutes);
    app.use('/api/v1/dashboard', dashboardRoutes);

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
