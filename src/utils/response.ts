import { Response } from 'express';

/**
 * Standard Response Envelope
 */
export interface StandardResponse<T> {
    status: 'success' | 'error';
    message: string;
    ErrorCode: number;
    ErrorMessage: string | null;
    data: T;
}

/**
 * List Response Envelope (with Pagination)
 */
export interface ListResponse<T> {
    status: 'success' | 'error';
    message: string;
    ErrorCode: number;
    ErrorMessage: string | null;
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

/**
 * Send a standardized success response
 */
export const sendSuccess = <T>(
    res: Response,
    message: string,
    data: T,
    statusCode = 200
) => {
    return res.status(statusCode).json({
        status: 'success',
        message,
        ErrorCode: 0,
        ErrorMessage: null,
        data,
    });
};

/**
 * Send a standardized list response with pagination metadata
 */
export const sendList = <T>(
    res: Response,
    message: string,
    data: T[],
    meta: { page: number; limit: number; total: number },
    statusCode = 200
) => {
    const totalPages = Math.ceil(meta.total / meta.limit);

    return res.status(statusCode).json({
        status: 'success',
        message,
        ErrorCode: 0,
        ErrorMessage: null,
        data,
        meta: {
            ...meta,
            totalPages,
        },
    });
};
