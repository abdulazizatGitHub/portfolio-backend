import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

/**
 * Validation Middleware
 * Validates request data against a Zod schema
 */
export const validate = (schema: AnyZodObject) => {
    return async (req: Request, _res: Response, next: NextFunction) => {
        try {
            const parsed = await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            // Update request with parsed/transformed data if they were part of the schema
            if (parsed.body !== undefined) req.body = parsed.body;
            if (parsed.query !== undefined) req.query = parsed.query;
            if (parsed.params !== undefined) req.params = parsed.params;

            next();
        } catch (error) {
            if (error instanceof ZodError) {
                // Let the global error handler handle Zod errors
                return next(error);
            }
            next(error);
        }
    };
};
