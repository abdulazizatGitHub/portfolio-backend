import * as skillRepository from '@data/repositories/skill.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { Skill } from '@data/prisma.client';

/**
 * Skill Service
 * Logic layer for skill management
 */

/**
 * Get all skills
 */
export const getAllSkills = async (): Promise<Skill[]> => {
    return await skillRepository.findAll();
};

/**
 * Get skill by ID
 */
export const getSkillById = async (id: string): Promise<Skill> => {
    const skill = await skillRepository.findById(id);
    if (!skill) {
        throw new NotFoundError('Skill not found', 'SKILL_NOT_FOUND');
    }
    return skill;
};

/**
 * Get skill by slug
 */
export const getSkillBySlug = async (slug: string): Promise<Skill> => {
    const skill = await skillRepository.findBySlug(slug);
    if (!skill) {
        throw new NotFoundError('Skill not found', 'SKILL_NOT_FOUND');
    }
    return skill;
};

/**
 * Create a new skill
 */
export const createSkill = async (data: {
    name: string;
    slug: string;
    category?: string | null;
    level?: string | null;
    icon_url?: string | null;
    order_index?: number;
}): Promise<Skill> => {
    return await skillRepository.create(data);
};

/**
 * Update an existing skill
 */
export const updateSkill = async (
    id: string,
    data: {
        name?: string;
        slug?: string;
        category?: string | null;
        level?: string | null;
        icon_url?: string | null;
        order_index?: number;
    }
): Promise<Skill> => {
    await getSkillById(id);
    return await skillRepository.update(id, data);
};

/**
 * Delete a skill
 */
export const deleteSkill = async (id: string): Promise<Skill> => {
    await getSkillById(id);
    return await skillRepository.deleteSkill(id);
};
