import { prisma, AboutParagraph, Prisma } from '../prisma.client';

/**
 * About Paragraph Repository
 * Data access layer for biography paragraphs
 */

/**
 * Find all about paragraphs ordered by index
 */
export const findAll = async (): Promise<AboutParagraph[]> => {
    return await prisma.aboutParagraph.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find paragraph by ID
 */
export const findById = async (id: string): Promise<AboutParagraph | null> => {
    return await prisma.aboutParagraph.findUnique({ where: { id } });
};

/**
 * Create a new about paragraph
 */
export const create = async (data: Prisma.AboutParagraphCreateInput): Promise<AboutParagraph> => {
    return await prisma.aboutParagraph.create({ data });
};

/**
 * Update an about paragraph
 */
export const update = async (id: string, data: Prisma.AboutParagraphUpdateInput): Promise<AboutParagraph> => {
    return await prisma.aboutParagraph.update({
        where: { id },
        data,
    });
};

/**
 * Delete an about paragraph
 */
export const deleteById = async (id: string): Promise<AboutParagraph> => {
    return await prisma.aboutParagraph.delete({ where: { id } });
};
