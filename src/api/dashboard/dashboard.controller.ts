import { Request, Response, NextFunction } from 'express';
import { DashboardService } from '../../core/services/dashboard.service';
import { sendSuccess } from '../../utils/response';

/**
 * Dashboard Controller
 */

/**
 * Get Command Center Stats
 * GET /api/v1/dashboard/stats
 */
export const getStats = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const stats = await DashboardService.getCommandCenterStats();
        sendSuccess(res, 'Dashboard statistics retrieved successfully', stats);
    } catch (error) {
        next(error);
    }
};
