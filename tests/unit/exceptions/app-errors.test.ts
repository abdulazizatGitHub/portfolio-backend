import {
    AppError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError,
    ValidationError,
    InternalServerError,
    DatabaseError,
} from '../../../src/core/exceptions/app-errors';

describe('Custom Error Classes', () => {
    describe('AppError', () => {
        it('should create an AppError with correct properties', () => {
            const error = new AppError('Test error', 500, 'TEST_ERROR');

            expect(error).toBeInstanceOf(Error);
            expect(error).toBeInstanceOf(AppError);
            expect(error.message).toBe('Test error');
            expect(error.statusCode).toBe(500);
            expect(error.code).toBe('TEST_ERROR');
            expect(error.isOperational).toBe(true);
            expect(error.stack).toBeDefined();
        });

        it('should mark error as non-operational when specified', () => {
            const error = new AppError('Test error', 500, 'TEST_ERROR', false);

            expect(error.isOperational).toBe(false);
        });
    });

    describe('BadRequestError', () => {
        it('should create a 400 error with default message', () => {
            const error = new BadRequestError();

            expect(error).toBeInstanceOf(BadRequestError);
            expect(error.statusCode).toBe(400);
            expect(error.code).toBe('BAD_REQUEST');
            expect(error.message).toBe('Bad Request');
            expect(error.isOperational).toBe(true);
        });

        it('should create a 400 error with custom message and code', () => {
            const error = new BadRequestError('Invalid input', 'INVALID_INPUT');

            expect(error.message).toBe('Invalid input');
            expect(error.code).toBe('INVALID_INPUT');
        });
    });

    describe('UnauthorizedError', () => {
        it('should create a 401 error', () => {
            const error = new UnauthorizedError();

            expect(error).toBeInstanceOf(UnauthorizedError);
            expect(error.statusCode).toBe(401);
            expect(error.code).toBe('UNAUTHORIZED');
            expect(error.isOperational).toBe(true);
        });
    });

    describe('ForbiddenError', () => {
        it('should create a 403 error', () => {
            const error = new ForbiddenError();

            expect(error).toBeInstanceOf(ForbiddenError);
            expect(error.statusCode).toBe(403);
            expect(error.code).toBe('FORBIDDEN');
            expect(error.isOperational).toBe(true);
        });
    });

    describe('NotFoundError', () => {
        it('should create a 404 error', () => {
            const error = new NotFoundError();

            expect(error).toBeInstanceOf(NotFoundError);
            expect(error.statusCode).toBe(404);
            expect(error.code).toBe('NOT_FOUND');
            expect(error.message).toBe('Resource not found');
            expect(error.isOperational).toBe(true);
        });
    });

    describe('ConflictError', () => {
        it('should create a 409 error', () => {
            const error = new ConflictError();

            expect(error).toBeInstanceOf(ConflictError);
            expect(error.statusCode).toBe(409);
            expect(error.code).toBe('CONFLICT');
            expect(error.isOperational).toBe(true);
        });
    });

    describe('ValidationError', () => {
        it('should create a 422 error', () => {
            const error = new ValidationError();

            expect(error).toBeInstanceOf(ValidationError);
            expect(error.statusCode).toBe(422);
            expect(error.code).toBe('VALIDATION_ERROR');
            expect(error.message).toBe('Validation failed');
            expect(error.isOperational).toBe(true);
        });
    });

    describe('InternalServerError', () => {
        it('should create a 500 error marked as non-operational', () => {
            const error = new InternalServerError();

            expect(error).toBeInstanceOf(InternalServerError);
            expect(error.statusCode).toBe(500);
            expect(error.code).toBe('INTERNAL_SERVER_ERROR');
            expect(error.message).toBe('Internal server error');
            expect(error.isOperational).toBe(false);
        });
    });

    describe('DatabaseError', () => {
        it('should create a database error marked as non-operational', () => {
            const error = new DatabaseError();

            expect(error).toBeInstanceOf(DatabaseError);
            expect(error.statusCode).toBe(500);
            expect(error.code).toBe('DATABASE_ERROR');
            expect(error.message).toBe('Database error');
            expect(error.isOperational).toBe(false);
        });
    });

    describe('Error inheritance chain', () => {
        it('should maintain proper prototype chain', () => {
            const badRequest = new BadRequestError();
            const unauthorized = new UnauthorizedError();
            const notFound = new NotFoundError();

            expect(badRequest instanceof AppError).toBe(true);
            expect(badRequest instanceof Error).toBe(true);
            expect(unauthorized instanceof AppError).toBe(true);
            expect(notFound instanceof AppError).toBe(true);
        });
    });
});

