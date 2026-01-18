import { Request, Response, NextFunction } from 'express';
import { AppError } from '@core/exceptions/app-errors';
import { logger } from '@utils/logger';
import { config } from '@core/config/env.config';
import { ZodError } from 'zod';

/**
 * Standardized error response interface
 */
interface ErrorResponse {
    status: 'error';
    code: string;
    message: string;
    stack?: string;
}

/**
 * Global error handling middleware
 * Handles all errors thrown in the application and returns standardized error responses
 *
 * @param err - Error object
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
): void => {
    let statusCode = 500;
    let code = 'INTERNAL_SERVER_ERROR';
    let message = 'An unexpected error occurred';

    // Handle custom AppError instances
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        code = err.code;
        message = err.message;

        // Log operational errors as warnings
        if (err.isOperational) {
            logger.warn(`Operational error: ${err.message}`, {
                code: err.code,
                statusCode: err.statusCode,
                url: req.originalUrl,
                method: req.method,
            });
        } else {
            // Log non-operational errors as errors
            logger.error(`Non-operational error: ${err.message}`, {
                code: err.code,
                statusCode: err.statusCode,
                stack: err.stack,
                url: req.originalUrl,
                method: req.method,
            });
        }
    }
    // Handle Zod validation errors
    else if (err instanceof ZodError) {
        statusCode = 422;
        code = 'VALIDATION_ERROR';
        message = err.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');

        logger.warn(`Validation error: ${message}`, {
            errors: err.errors,
            url: req.originalUrl,
            method: req.method,
        });
    }
    // Handle Prisma errors
    else if (err.name === 'PrismaClientKnownRequestError') {
        statusCode = 500;
        code = 'DATABASE_ERROR';
        message = 'Database operation failed';

        logger.error(`Database error: ${err.message}`, {
            stack: err.stack,
            url: req.originalUrl,
            method: req.method,
        });
    }
    // Handle all other errors
    else {
        logger.error(`Unhandled error: ${err.message}`, {
            stack: err.stack,
            url: req.originalUrl,
            method: req.method,
            body: req.body,
        });
    }

    // Construct error response
    const errorResponse: ErrorResponse = {
        status: 'error',
        code,
        message,
    };

    // Include stack trace only in development
    if (!config.isProduction) {
        errorResponse.stack = err.stack;
    }

    res.status(statusCode).json(errorResponse);
};

/**
 * Not Found middleware
 * Handles 404 errors for undefined routes
 */
export const notFoundHandler = (
    req: Request,
    _res: Response,
    next: NextFunction
): void => {
    const error = new AppError(
        `Route ${req.originalUrl} not found`,
        404,
        'ROUTE_NOT_FOUND'
    );
    next(error);
};
