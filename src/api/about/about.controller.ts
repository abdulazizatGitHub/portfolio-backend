import { Request, Response, NextFunction } from 'express';
import * as aboutService from '../../core/services/about.service';
import { sendSuccess } from '../../utils/response';
import { ActivityService, ActivityAction } from '@core/services/activity.service';

/**
 * About Controller
 * Handles retrieval and management of About sections
 */

/**
 * Get all About sections (aggregated)
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
 * Create a new About section
 */
export const createSection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const section = await aboutService.createSection(req.body);

        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.CREATE,
            entityType: 'about',
            entityId: section.id,
            entityName: section.role_title,
            description: 'Created about section',
        });

        sendSuccess(res, 'About section created', section, 201);
    } catch (error) {
        next(error);
    }
};

/**
 * Update an About section
 */
export const updateSection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await aboutService.updateSection(id, req.body);

        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'about',
            entityId: updated.id,
            entityName: updated.role_title,
            description: 'Updated about section',
        });

        sendSuccess(res, 'About section updated', updated);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete an About section
 */
export const deleteSection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await aboutService.deleteSection(id);
        sendSuccess(res, 'About section deleted', null);
    } catch (error) {
        next(error);
    }
};

// ====================
// Paragraphs
// ====================

export const createParagraph = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sectionId = req.params.sectionId as string;
        const paragraph = await aboutService.createParagraph(sectionId, req.body);
        sendSuccess(res, 'Paragraph created', paragraph, 201);
    } catch (error) {
        next(error);
    }
};

export const updateParagraph = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await aboutService.updateParagraph(id, req.body);
        sendSuccess(res, 'Paragraph updated', updated);
    } catch (error) {
        next(error);
    }
};

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

export const createStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sectionId = req.params.sectionId as string;
        const stat = await aboutService.createStat(sectionId, req.body);
        sendSuccess(res, 'Stat created', stat, 201);
    } catch (error) {
        next(error);
    }
};

export const updateStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await aboutService.updateStat(id, req.body);
        sendSuccess(res, 'Stat updated', updated);
    } catch (error) {
        next(error);
    }
};

export const deleteStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await aboutService.deleteStat(id);
        sendSuccess(res, 'Stat deleted', null);
    } catch (error) {
        next(error);
    }
};
