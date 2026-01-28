import { Request, Response, NextFunction } from 'express';
import { logEvent } from '../middlewares/analytics.middleware';
import { sendSuccess } from '../../utils/response';
import { z } from 'zod';

/**
 * Event Logging Schema
 */
const eventSchema = z.object({
    body: z.object({
        type: z.string().min(1),
        category: z.string().optional(),
        label: z.string().optional(),
        metadata: z.any().optional(),
    }),
});

/**
 * Log Event
 * POST /api/v1/analytics/events
 */
export const logEngagementEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type, category, label, metadata } = req.body;

        await logEvent(type, category, label, metadata);

        sendSuccess(res, 'Event logged successfully', null, 201);
    } catch (error) {
        next(error);
    }
};

export { eventSchema };
