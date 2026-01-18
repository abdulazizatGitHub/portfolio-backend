import { prisma, Skill, Prisma } from '../prisma.client';

/**
 * Skill Repository
 * Data access layer for Skill model
 */

/**
 * Find all skills
 * @returns Array of skills ordered by name
 */
export const findAll = async (): Promise<Skill[]> => {
    return await prisma.skill.findMany({
        orderBy: { name: 'asc' },
    });
};

/**
 * Find skill by ID
 * @param id - Skill ID
 * @returns Skill or null if not found
 */
export const findById = async (id: string): Promise<Skill | null> => {
    return await prisma.skill.findUnique({
        where: { id },
    });
};

/**
 * Find skill by slug
 * @param slug - Skill slug
 * @returns Skill or null if not found
 */
export const findBySlug = async (slug: string): Promise<Skill | null> => {
    return await prisma.skill.findUnique({
        where: { slug },
    });
};

/**
 * Find skills by category
 * @param category - Skill category (e.g., "Frontend", "Backend")
 * @returns Array of skills in the category
 */
export const findByCategory = async (category: string): Promise<Skill[]> => {
    return await prisma.skill.findMany({
        where: { category },
        orderBy: { name: 'asc' },
    });
};

/**
 * Create a new skill
 * @param data - Skill creation data
 * @returns Created skill
 */
export const create = async (
    data: Prisma.SkillCreateInput
): Promise<Skill> => {
    return await prisma.skill.create({
        data,
    });
};

/**
 * Update skill by ID
 * @param id - Skill ID
 * @param data - Skill update data
 * @returns Updated skill
 */
export const update = async (
    id: string,
    data: Prisma.SkillUpdateInput
): Promise<Skill> => {
    return await prisma.skill.update({
        where: { id },
        data,
    });
};

/**
 * Delete skill by ID
 * @param id - Skill ID
 * @returns Deleted skill
 */
export const deleteSkill = async (id: string): Promise<Skill> => {
    return await prisma.skill.delete({
        where: { id },
    });
};

