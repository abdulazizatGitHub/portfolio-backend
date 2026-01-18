import { Request, Response } from 'express';
import * as skillService from '@core/services/skill.service';
import { sendSuccess, sendList } from '@utils/response';

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
    return sendSuccess(res, 'Skill created successfully', skill, 201);
};

/**
 * Update an existing skill
 */
export const updateSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.updateSkill(id, req.body);
    return sendSuccess(res, 'Skill updated successfully', skill);
};

/**
 * Delete a skill
 */
export const deleteSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await skillService.deleteSkill(id);
    return res.status(204).send();
};
