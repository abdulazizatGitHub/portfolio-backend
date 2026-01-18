import { prisma, AboutContent, Prisma } from '../prisma.client';

/**
 * About Content Repository
 * Data access layer for About section metadata
 */

/**
 * Find the primary about content entry
 */
export const findFirst = async (): Promise<AboutContent | null> => {
    return await prisma.aboutContent.findFirst();
};

/**
 * Create a new about content entry
 */
export const create = async (data: Prisma.AboutContentCreateInput): Promise<AboutContent> => {
    return await prisma.aboutContent.create({ data });
};

/**
 * Update about content entry
 */
export const update = async (id: string, data: Prisma.AboutContentUpdateInput): Promise<AboutContent> => {
    return await prisma.aboutContent.update({
        where: { id },
        data,
    });
};
