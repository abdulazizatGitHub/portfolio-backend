import { Request, Response, NextFunction } from 'express';
import * as timelineService from '../../core/services/timeline.service';
import { sendSuccess, sendList } from '../../utils/response';

/**
 * Timeline Controller
 * Handles academic and professional history entries
 */

/**
 * Get unified timeline data
 */
export const getTimeline = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await timelineService.getTimelineData();
        sendSuccess(res, 'Timeline data retrieved', data);
    } catch (error) {
        next(error);
    }
};

// ====================
// Education
// ====================

export const getAllEducation = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const education = await timelineService.getAllEducation();
        sendList(res, 'Education entries retrieved', education, {
            page: 1,
            limit: education.length || 1,
            total: education.length,
        });
    } catch (error) {
        next(error);
    }
};

export const createEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entry = await timelineService.createEducation(req.body);
        sendSuccess(res, 'Education entry created', entry, 201);
    } catch (error) {
        next(error);
    }
};

export const updateEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const entry = await timelineService.updateEducation(id, req.body);
        sendSuccess(res, 'Education entry updated', entry);
    } catch (error) {
        next(error);
    }
};

export const deleteEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await timelineService.deleteEducation(id);
        sendSuccess(res, 'Education entry deleted', null);
    } catch (error) {
        next(error);
    }
};

// ====================
// Experience
// ====================

export const getAllExperience = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const experience = await timelineService.getAllExperience();
        sendList(res, 'Experience entries retrieved', experience, {
            page: 1,
            limit: experience.length || 1,
            total: experience.length,
        });
    } catch (error) {
        next(error);
    }
};

export const createExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entry = await timelineService.createExperience(req.body);
        sendSuccess(res, 'Experience entry created', entry, 201);
    } catch (error) {
        next(error);
    }
};

export const updateExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const entry = await timelineService.updateExperience(id, req.body);
        sendSuccess(res, 'Experience entry updated', entry);
    } catch (error) {
        next(error);
    }
};

export const deleteExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await timelineService.deleteExperience(id);
        sendSuccess(res, 'Experience entry deleted', null);
    } catch (error) {
        next(error);
    }
};
