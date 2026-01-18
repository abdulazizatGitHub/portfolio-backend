import { prisma, PersonalContent, Prisma } from '../prisma.client';

/**
 * Personal Content Repository
 * Data access layer for hero section content
 */

/**
 * Find the primary personal content entry
 */
export const findFirst = async (): Promise<PersonalContent | null> => {
    return await prisma.personalContent.findFirst();
};

/**
 * Find personal content by ID
 */
export const findById = async (id: string): Promise<PersonalContent | null> => {
    return await prisma.personalContent.findUnique({ where: { id } });
};

/**
 * Create a new personal content entry
 */
export const create = async (data: Prisma.PersonalContentCreateInput): Promise<PersonalContent> => {
    return await prisma.personalContent.create({ data });
};

/**
 * Update personal content entry
 */
export const update = async (id: string, data: Prisma.PersonalContentUpdateInput): Promise<PersonalContent> => {
    return await prisma.personalContent.update({
        where: { id },
        data,
    });
};

/**
 * Delete personal content by ID
 */
export const deleteById = async (id: string): Promise<PersonalContent> => {
    return await prisma.personalContent.delete({ where: { id } });
};
