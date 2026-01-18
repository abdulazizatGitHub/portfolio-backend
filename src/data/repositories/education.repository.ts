import { prisma, EducationEntry, Prisma } from '../prisma.client';

/**
 * Education Repository
 * Data access layer for academic history
 */

/**
 * Find all education entries ordered by index or date
 */
export const findAll = async (): Promise<EducationEntry[]> => {
    return await prisma.educationEntry.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find education entry by ID
 */
export const findById = async (id: string): Promise<EducationEntry | null> => {
    return await prisma.educationEntry.findUnique({ where: { id } });
};

/**
 * Create a new education entry
 */
export const create = async (data: Prisma.EducationEntryCreateInput): Promise<EducationEntry> => {
    return await prisma.educationEntry.create({ data });
};

/**
 * Update an education entry
 */
export const update = async (id: string, data: Prisma.EducationEntryUpdateInput): Promise<EducationEntry> => {
    return await prisma.educationEntry.update({
        where: { id },
        data,
    });
};

/**
 * Delete an education entry
 */
export const deleteById = async (id: string): Promise<EducationEntry> => {
    return await prisma.educationEntry.delete({ where: { id } });
};
