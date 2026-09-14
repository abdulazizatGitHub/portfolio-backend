import { prisma, Stat, Prisma } from '../prisma.client';

/**
 * Stat Repository
 * Data access layer for professional metrics and stats
 */

/**
 * Find all stats, optionally scoped to a section
 */
export const findAll = async (aboutContentId?: string): Promise<Stat[]> => {
    return await prisma.stat.findMany({
        where: aboutContentId ? { about_content_id: aboutContentId } : undefined,
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find stat by ID
 */
export const findById = async (id: string): Promise<Stat | null> => {
    return await prisma.stat.findUnique({ where: { id } });
};

/**
 * Create a new stat
 */
export const create = async (data: Prisma.StatCreateInput): Promise<Stat> => {
    return await prisma.stat.create({ data });
};

/**
 * Update a stat
 */
export const update = async (id: string, data: Prisma.StatUpdateInput): Promise<Stat> => {
    return await prisma.stat.update({
        where: { id },
        data,
    });
};

/**
 * Delete a stat
 */
export const deleteById = async (id: string): Promise<Stat> => {
    return await prisma.stat.delete({ where: { id } });
};
