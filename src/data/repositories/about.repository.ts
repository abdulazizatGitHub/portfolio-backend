import { prisma, AboutContent, Prisma } from '../prisma.client';

/**
 * About Content Repository
 * Data access layer for About sections (each section owns its paragraphs + stats)
 */

export type AboutSectionWithRelations = AboutContent & {
    paragraphs: Prisma.AboutParagraphGetPayload<object>[];
    stats: Prisma.StatGetPayload<object>[];
};

const sectionInclude = {
    paragraphs: { orderBy: { order_index: 'asc' as const } },
    stats: { orderBy: { order_index: 'asc' as const } },
};

/**
 * Find all About sections, each with its paragraphs and stats
 */
export const findAll = async (): Promise<AboutSectionWithRelations[]> => {
    return await prisma.aboutContent.findMany({
        include: sectionInclude,
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find a single About section by ID
 */
export const findById = async (id: string): Promise<AboutSectionWithRelations | null> => {
    return await prisma.aboutContent.findUnique({
        where: { id },
        include: sectionInclude,
    });
};

/**
 * Create a new About section
 */
export const create = async (data: Prisma.AboutContentCreateInput): Promise<AboutContent> => {
    return await prisma.aboutContent.create({ data });
};

/**
 * Update an About section
 */
export const update = async (id: string, data: Prisma.AboutContentUpdateInput): Promise<AboutContent> => {
    return await prisma.aboutContent.update({
        where: { id },
        data,
    });
};

/**
 * Delete an About section (cascades to its paragraphs/stats)
 */
export const deleteById = async (id: string): Promise<AboutContent> => {
    return await prisma.aboutContent.delete({ where: { id } });
};
