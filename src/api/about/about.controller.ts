import { Request, Response, NextFunction } from 'express';
import * as aboutService from '../../core/services/about.service';
import { sendSuccess } from '../../utils/response';
import { ActivityService, ActivityAction } from '@core/services/activity.service';

/**
 * About Controller
 * Handles retrieval and management of About section content
 */

/**
 * Get full About section data (aggregated)
 */
export const getAbout = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await aboutService.getAboutData();
        sendSuccess(res, 'About data retrieved', data);
    } catch (error) {
        next(error);
    }
};

/**
 * Update about metadata (upsert singleton)
 */
export const updateAbout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await aboutService.updateAboutContent(req.body);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'about',
            entityId: updated.id,
            entityName: 'About Metadata',
            description: 'Updated about section metadata and imagery',
        });

        sendSuccess(res, 'About content updated', updated);
    } catch (error) {
        next(error);
    }
};

// ====================
// Paragraphs
// ====================

/**
 * Create a new biography paragraph
 */
export const createParagraph = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paragraph = await aboutService.createParagraph(req.body);
        sendSuccess(res, 'Paragraph created', paragraph, 201);
    } catch (error) {
        next(error);
    }
};

/**
 * Update a biography paragraph
 */
export const updateParagraph = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await aboutService.updateParagraph(id, req.body);
        sendSuccess(res, 'Paragraph updated', updated);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a biography paragraph
 */
export const deleteParagraph = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await aboutService.deleteParagraph(id);
        sendSuccess(res, 'Paragraph deleted', null);
    } catch (error) {
        next(error);
    }
};

// ====================
// Stats
// ====================

/**
 * Create a new professional stat
 */
export const createStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stat = await aboutService.createStat(req.body);
        sendSuccess(res, 'Stat created', stat, 201);
    } catch (error) {
        next(error);
    }
};

/**
 * Update a professional stat
 */
export const updateStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await aboutService.updateStat(id, req.body);
        sendSuccess(res, 'Stat updated', updated);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a professional stat
 */
export const deleteStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await aboutService.deleteStat(id);
        sendSuccess(res, 'Stat deleted', null);
    } catch (error) {
        next(error);
    }
};
