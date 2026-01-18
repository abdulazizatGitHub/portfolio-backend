import { prisma, SocialLink, Prisma } from '../prisma.client';

/**
 * Social Link Repository
 * Data access layer for professional social media links
 */

/**
 * Find all social links ordered by index
 */
export const findAll = async (): Promise<SocialLink[]> => {
    return await prisma.socialLink.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find social link by ID
 */
export const findById = async (id: string): Promise<SocialLink | null> => {
    return await prisma.socialLink.findUnique({ where: { id } });
};

/**
 * Create a new social link
 */
export const create = async (data: Prisma.SocialLinkCreateInput): Promise<SocialLink> => {
    return await prisma.socialLink.create({ data });
};

/**
 * Update a social link
 */
export const update = async (id: string, data: Prisma.SocialLinkUpdateInput): Promise<SocialLink> => {
    return await prisma.socialLink.update({
        where: { id },
        data,
    });
};

/**
 * Delete a social link
 */
export const deleteById = async (id: string): Promise<SocialLink> => {
    return await prisma.socialLink.delete({ where: { id } });
};
