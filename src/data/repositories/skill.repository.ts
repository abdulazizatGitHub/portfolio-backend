import { prisma, Skill, Prisma } from '../prisma.client';

/**
 * Skill Repository
 * Data access layer for Skill model
 */

/**
 * Find all skills with advanced options
 */
export const findAll = async (options: {
    skip?: number;
    take?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    category?: string;
} = {}): Promise<Skill[]> => {
    const {
        skip,
        take,
        search,
        sortBy = 'name',
        sortOrder = 'asc',
        category,
    } = options;

    const where: Prisma.SkillWhereInput = {
        category: category ?? undefined,
        OR: search ? [
            { name: { contains: search, mode: 'insensitive' } },
            { slug: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.skill.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder },
    });
};

/**
 * Count skills based on filters
 */
export const count = async (options: {
    search?: string;
    category?: string;
} = {}): Promise<number> => {
    const { search, category } = options;

    const where: Prisma.SkillWhereInput = {
        category: category ?? undefined,
        OR: search ? [
            { name: { contains: search, mode: 'insensitive' } },
            { slug: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.skill.count({ where });
};

/**
 * Find skill by ID
 */
export const findById = async (id: string): Promise<Skill | null> => {
    return await prisma.skill.findUnique({
        where: { id },
    });
};

/**
 * Find skill by slug
 */
export const findBySlug = async (slug: string): Promise<Skill | null> => {
    return await prisma.skill.findUnique({
        where: { slug },
    });
};

/**
 * Find skill by name
 */
export const findByName = async (name: string): Promise<Skill | null> => {
    return await prisma.skill.findFirst({
        where: { name: { equals: name, mode: 'insensitive' } },
    });
};

/**
 * Create a new skill
 */
export const create = async (data: Prisma.SkillCreateInput): Promise<Skill> => {
    return await prisma.skill.create({ data });
};

/**
 * Update skill by ID
 */
export const update = async (id: string, data: Prisma.SkillUpdateInput): Promise<Skill> => {
    return await prisma.skill.update({ where: { id }, data });
};

/**
 * Delete skill by ID
 */
export const deleteById = async (id: string): Promise<Skill> => {
    return await prisma.skill.delete({ where: { id } });
};

