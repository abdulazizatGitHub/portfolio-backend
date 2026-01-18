import * as skillRepository from '@data/repositories/skill.repository';
import { NotFoundError, ConflictError } from '../exceptions/app-errors';
import { Skill } from '@data/prisma.client';
import { slugify } from '@utils/slugify';

/**
 * Get all skills with pagination and filters
 */
export const getAllSkills = async (options: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    category?: string;
} = {}): Promise<{ skills: Skill[]; total: number }> => {
    const {
        page = 1,
        limit = 10,
        ...filters
    } = options;

    const skip = (page - 1) * limit;

    const [skills, total] = await Promise.all([
        skillRepository.findAll({ ...filters, skip, take: limit }),
        skillRepository.count(filters),
    ]);

    return { skills, total };
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
    slug?: string;
    category?: string | null;
    icon_url?: string | null;
}): Promise<Skill> => {
    // 1. Generate slug if missing
    const slug = data.slug ? slugify(data.slug) : slugify(data.name);

    // 2. Check uniqueness (name and slug)
    const [existingName, existingSlug] = await Promise.all([
        skillRepository.findByName(data.name),
        skillRepository.findBySlug(slug),
    ]);

    if (existingName || existingSlug) {
        throw new ConflictError('Skill name or slug already exists', 'SKILL_CONFLICT');
    }

    return await skillRepository.create({
        ...data,
        slug,
    });
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
        icon_url?: string | null;
    }
): Promise<Skill> => {
    // Check if exists
    await getSkillById(id);

    // Uniqueness checks if name or slug changes
    if (data.name) {
        const existing = await skillRepository.findByName(data.name);
        if (existing && existing.id !== id) {
            throw new ConflictError('Skill name already exists', 'SKILL_NAME_CONFLICT');
        }
    }

    if (data.slug) {
        const slug = slugify(data.slug);
        const existing = await skillRepository.findBySlug(slug);
        if (existing && existing.id !== id) {
            throw new ConflictError('Skill slug already exists', 'SKILL_SLUG_CONFLICT');
        }
        data.slug = slug;
    }

    return await skillRepository.update(id, data);
};

/**
 * Delete a skill
 */
export const deleteSkill = async (id: string): Promise<Skill> => {
    await getSkillById(id);
    return await skillRepository.deleteById(id);
};
