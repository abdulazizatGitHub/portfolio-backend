import { prisma, ContactContent, Prisma } from '../prisma.client';

/**
 * Contact Content Repository
 * Data access layer for Contact section metadata
 */

/**
 * Find the primary contact content entry
 */
export const findFirst = async (): Promise<ContactContent | null> => {
    return await prisma.contactContent.findFirst();
};

/**
 * Create a new contact content entry
 */
export const create = async (data: Prisma.ContactContentCreateInput): Promise<ContactContent> => {
    return await prisma.contactContent.create({ data });
};

/**
 * Update contact content entry
 */
export const update = async (id: string, data: Prisma.ContactContentUpdateInput): Promise<ContactContent> => {
    return await prisma.contactContent.update({
        where: { id },
        data,
    });
};
