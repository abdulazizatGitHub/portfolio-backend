import { Request, Response } from 'express';
import * as skillService from '@core/services/skill.service';

/**
 * Get all skills
 */
export const getSkills = async (_req: Request, res: Response) => {
    const skills = await skillService.getAllSkills();

    res.status(200).json({
        status: 'success',
        data: { skills },
    });
};

/**
 * Get skill by ID
 */
export const getSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.getSkillById(id);

    res.status(200).json({
        status: 'success',
        data: { skill },
    });
};

/**
 * Create a new skill
 */
export const createSkill = async (req: Request, res: Response) => {
    const skill = await skillService.createSkill(req.body);

    res.status(201).json({
        status: 'success',
        data: { skill },
    });
};

/**
 * Update an existing skill
 */
export const updateSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const skill = await skillService.updateSkill(id, req.body);

    res.status(200).json({
        status: 'success',
        data: { skill },
    });
};

/**
 * Delete a skill
 */
export const deleteSkill = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await skillService.deleteSkill(id);

    res.status(204).send();
};
