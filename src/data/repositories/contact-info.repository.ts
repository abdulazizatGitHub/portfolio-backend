import { prisma, ContactInfoItem, Prisma } from '../prisma.client';

/**
 * Contact Info Repository
 * Data access layer for contact details (email, phone, etc.)
 */

/**
 * Find all contact info items ordered by index
 */
export const findAll = async (): Promise<ContactInfoItem[]> => {
    return await prisma.contactInfoItem.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find contact info item by ID
 */
export const findById = async (id: string): Promise<ContactInfoItem | null> => {
    return await prisma.contactInfoItem.findUnique({ where: { id } });
};

/**
 * Create a new contact info item
 */
export const create = async (data: Prisma.ContactInfoItemCreateInput): Promise<ContactInfoItem> => {
    return await prisma.contactInfoItem.create({ data });
};

/**
 * Update a contact info item
 */
export const update = async (id: string, data: Prisma.ContactInfoItemUpdateInput): Promise<ContactInfoItem> => {
    return await prisma.contactInfoItem.update({
        where: { id },
        data,
    });
};

/**
 * Delete a contact info item
 */
export const deleteById = async (id: string): Promise<ContactInfoItem> => {
    return await prisma.contactInfoItem.delete({ where: { id } });
};
