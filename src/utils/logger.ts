import winston from 'winston';
import { config } from '@core/config/env.config';

/**
 * Log levels configuration
 */
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

/**
 * Log colors for console output
 */
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

winston.addColors(colors);

/**
 * Determine log level based on environment
 */
const level = (): string => {
    const isDevelopment = config.env.NODE_ENV === 'development';
    return isDevelopment ? 'debug' : 'warn';
};

/**
 * Console format for development
 */
const consoleFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
);

/**
 * JSON format for production
 */
const jsonFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
);

/**
 * Define transports based on environment
 */
const transports: winston.transport[] = [
    // Console transport for all environments
    new winston.transports.Console({
        format: config.isProduction ? jsonFormat : consoleFormat,
    }),
];

// File transports for production
if (config.isProduction) {
    transports.push(
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: jsonFormat,
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: jsonFormat,
        })
    );
}

/**
 * Winston logger instance
 */
export const logger = winston.createLogger({
    level: level(),
    levels,
    transports,
    exceptionHandlers: [
        new winston.transports.Console({
            format: config.isProduction ? jsonFormat : consoleFormat,
        }),
    ],
    rejectionHandlers: [
        new winston.transports.Console({
            format: config.isProduction ? jsonFormat : consoleFormat,
        }),
    ],
    exitOnError: false,
});

/**
 * Stream for Morgan HTTP logger
 */
export const morganStream = {
    write: (message: string): void => {
        logger.http(message.trim());
    },
};
