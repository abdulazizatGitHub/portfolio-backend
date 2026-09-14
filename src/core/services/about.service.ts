import * as aboutRepository from '../../data/repositories/about.repository';
import * as paragraphRepository from '../../data/repositories/about-paragraph.repository';
import * as statRepository from '../../data/repositories/stat.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { AboutContent } from '../../data/prisma.client';
import { AboutSectionWithRelations } from '../../data/repositories/about.repository';

/**
 * About Service
 * About is modeled as a list of sections (one per role), each owning its own
 * paragraphs and stats.
 */

/**
 * Get all About sections (aggregated with paragraphs + stats)
 */
export const getAboutData = async (): Promise<AboutSectionWithRelations[]> => {
    return await aboutRepository.findAll();
};

export const getSectionById = async (id: string): Promise<AboutSectionWithRelations> => {
    const section = await aboutRepository.findById(id);
    if (!section) throw new NotFoundError('About section not found');
    return section;
};

/**
 * Create a new About section
 */
export const createSection = async (data: {
    role_title: string;
    heading_prefix?: string;
    heading_highlight?: string;
    portrait_image_url?: string | null;
    order_index?: number;
}): Promise<AboutContent> => {
    return await aboutRepository.create(data as any);
};

/**
 * Update an About section
 */
export const updateSection = async (
    id: string,
    data: {
        role_title?: string;
        heading_prefix?: string;
        heading_highlight?: string;
        portrait_image_url?: string | null;
        order_index?: number;
    }
): Promise<AboutContent> => {
    await getSectionById(id);
    return await aboutRepository.update(id, data);
};

/**
 * Delete an About section (cascades to its paragraphs/stats)
 */
export const deleteSection = async (id: string): Promise<AboutContent> => {
    await getSectionById(id);
    return await aboutRepository.deleteById(id);
};

/**
 * Manage Paragraphs (scoped to a section)
 */
export const getAllParagraphs = (aboutContentId: string) => paragraphRepository.findAll(aboutContentId);

export const createParagraph = async (aboutContentId: string, data: { content: string; order_index?: number }) => {
    await getSectionById(aboutContentId);
    return paragraphRepository.create({
        ...data,
        about_content: { connect: { id: aboutContentId } },
    } as any);
};

export const updateParagraph = async (id: string, data: any) => {
    const existing = await paragraphRepository.findById(id);
    if (!existing) throw new NotFoundError('Paragraph not found');
    return paragraphRepository.update(id, data);
};

export const deleteParagraph = async (id: string) => {
    const existing = await paragraphRepository.findById(id);
    if (!existing) throw new NotFoundError('Paragraph not found');
    return paragraphRepository.deleteById(id);
};

/**
 * Manage Stats (scoped to a section)
 */
export const getStats = (aboutContentId: string) => statRepository.findAll(aboutContentId);

export const createStat = async (aboutContentId: string, data: { label: string; value: string; order_index?: number }) => {
    await getSectionById(aboutContentId);
    return statRepository.create({
        ...data,
        about_content: { connect: { id: aboutContentId } },
    } as any);
};

export const updateStat = async (id: string, data: any) => {
    const existing = await statRepository.findById(id);
    if (!existing) throw new NotFoundError('Stat not found');
    return statRepository.update(id, data);
};

export const deleteStat = async (id: string) => {
    const existing = await statRepository.findById(id);
    if (!existing) throw new NotFoundError('Stat not found');
    return statRepository.deleteById(id);
};
