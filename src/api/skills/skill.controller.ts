import { Request, Response, NextFunction } from 'express';
import * as skillService from '@core/services/skill.service';
import { sendSuccess, sendList } from '@utils/response';
import { BadRequestError } from '../../core/exceptions/app-errors';
import { ActivityService, ActivityAction } from '@core/services/activity.service';

/**
 * Get all skills with pagination and filters
 */
export const getSkills = async (req: Request, res: Response) => {
    const { page, limit, search, sortBy, sortOrder, category } = req.query;

    const { skills, total } = await skillService.getAllSkills({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        search: search as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as 'asc' | 'desc',
        category: category as string,
    });

    return sendList(res, 'Skills retrieved successfully', skills, {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 10,
        total,
    });
};

/**
 * Get skill by ID
 */
export const getSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.getSkillById(id);
    return sendSuccess(res, 'Skill retrieved successfully', skill);
};

/**
 * Get skill by slug
 */
export const getSkillBySlug = async (req: Request, res: Response) => {
    const slug = req.params.slug as string;
    const skill = await skillService.getSkillBySlug(slug);
    return sendSuccess(res, 'Skill retrieved successfully', skill);
};

/**
 * Create a new skill
 */
export const createSkill = async (req: Request, res: Response) => {
    const skill = await skillService.createSkill(req.body);

    // Log activity
    await ActivityService.log({
        userId: (req as any).user.id,
        action: ActivityAction.CREATE,
        entityType: 'skill',
        entityId: skill.id,
        entityName: skill.name,
        description: `Created new skill: ${skill.name}`,
    });

    return sendSuccess(res, 'Skill created successfully', skill, 201);
};

/**
 * Update an existing skill
 */
export const updateSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.updateSkill(id, req.body);

    // Log activity
    await ActivityService.log({
        userId: (req as any).user.id,
        action: ActivityAction.UPDATE,
        entityType: 'skill',
        entityId: skill.id,
        entityName: skill.name,
        description: `Updated skill: ${skill.name}`,
    });

    return sendSuccess(res, 'Skill updated successfully', skill);
};

/**
 * Delete a skill
 */
export const deleteSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.getSkillById(id);
    await skillService.deleteSkill(id);

    // Log activity
    await ActivityService.log({
        userId: (req as any).user.id,
        action: ActivityAction.DELETE,
        entityType: 'skill',
        entityId: id,
        entityName: skill.name,
        description: `Deleted skill: ${skill.name}`,
    });

    return res.status(204).send();
};

/**
 * Upload skill icon
 */
export const uploadSkillIcon = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        if (!req.file) {
            throw new BadRequestError('No icon file uploaded');
        }

        const filePath = `${req.file.destination}/${req.file.filename}`.replace(/\\/g, '/');
        const iconUrl = `/${filePath}`;

        const skill = await skillService.updateSkill(id, { icon_url: iconUrl });

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'skill',
            entityId: skill.id,
            entityName: skill.name,
            description: `Updated icon for skill: ${skill.name}`,
        });

        return sendSuccess(res, 'Skill icon uploaded successfully', skill);
    } catch (error) {
        return next(error);
    }
};
