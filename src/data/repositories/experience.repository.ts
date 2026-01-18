import { prisma, ExperienceEntry, Prisma } from '../prisma.client';

/**
 * Experience Repository
 * Data access layer for professional work history
 */

/**
 * Find all experience entries ordered by index or date (current first)
 */
export const findAll = async (): Promise<ExperienceEntry[]> => {
    return await prisma.experienceEntry.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find experience entry by ID
 */
export const findById = async (id: string): Promise<ExperienceEntry | null> => {
    return await prisma.experienceEntry.findUnique({ where: { id } });
};

/**
 * Create a new experience entry
 */
export const create = async (data: Prisma.ExperienceEntryCreateInput): Promise<ExperienceEntry> => {
    return await prisma.experienceEntry.create({ data });
};

/**
 * Update an experience entry
 */
export const update = async (id: string, data: Prisma.ExperienceEntryUpdateInput): Promise<ExperienceEntry> => {
    return await prisma.experienceEntry.update({
        where: { id },
        data,
    });
};

/**
 * Delete an experience entry
 */
export const deleteById = async (id: string): Promise<ExperienceEntry> => {
    return await prisma.experienceEntry.delete({ where: { id } });
};
