/**
 * Base application error class
 * All custom errors should extend this class
 */
export class AppError extends Error {
    public readonly statusCode: number;
    public readonly code: string;
    public readonly isOperational: boolean;

    constructor(
        message: string,
        statusCode: number,
        code: string,
        isOperational = true
    ) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = isOperational;

        // Maintains proper stack trace for where our error was thrown
        Error.captureStackTrace(this, this.constructor);

        // Set the prototype explicitly
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

/**
 * 400 Bad Request
 */
export class BadRequestError extends AppError {
    constructor(message = 'Bad Request', code = 'BAD_REQUEST') {
        super(message, 400, code);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

/**
 * 401 Unauthorized
 */
export class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized', code = 'UNAUTHORIZED') {
        super(message, 401, code);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

/**
 * 403 Forbidden
 */
export class ForbiddenError extends AppError {
    constructor(message = 'Forbidden', code = 'FORBIDDEN') {
        super(message, 403, code);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}

/**
 * 404 Not Found
 */
export class NotFoundError extends AppError {
    constructor(message = 'Resource not found', code = 'NOT_FOUND') {
        super(message, 404, code);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

/**
 * 409 Conflict
 */
export class ConflictError extends AppError {
    constructor(message = 'Conflict', code = 'CONFLICT') {
        super(message, 409, code);
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}

/**
 * 422 Unprocessable Entity (Validation Error)
 */
export class ValidationError extends AppError {
    constructor(message = 'Validation failed', code = 'VALIDATION_ERROR') {
        super(message, 422, code);
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

/**
 * 500 Internal Server Error
 */
export class InternalServerError extends AppError {
    constructor(
        message = 'Internal server error',
        code = 'INTERNAL_SERVER_ERROR'
    ) {
        super(message, 500, code, false);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}

/**
 * Database error
 */
export class DatabaseError extends AppError {
    constructor(message = 'Database error', code = 'DATABASE_ERROR') {
        super(message, 500, code, false);
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}
