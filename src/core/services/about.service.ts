import * as aboutRepository from '../../data/repositories/about.repository';
import * as paragraphRepository from '../../data/repositories/about-paragraph.repository';
import * as statRepository from '../../data/repositories/stat.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { AboutContent, AboutParagraph, Stat } from '../../data/prisma.client';

/**
 * About Service
 * Consolidated management for About section components
 */

/**
 * Get the full About section data
 */
export const getAboutData = async (): Promise<AboutContent & { paragraphs: AboutParagraph[]; stats: Stat[] }> => {
    const content = await aboutRepository.findFirst();
    const paragraphs = await paragraphRepository.findAll();
    const stats = await statRepository.findAll('about');

    if (!content) {
        throw new NotFoundError('About content not found');
    }

    return {
        ...content,
        paragraphs,
        stats,
    };
};

/**
 * Update or create about metadata
 */
export const updateAboutContent = async (data: {
    role_title?: string;
    heading_prefix?: string;
    heading_highlight?: string;
    portrait_image_url?: string | null;
}): Promise<AboutContent> => {
    const existing = await aboutRepository.findFirst();

    if (!existing) {
        return await aboutRepository.create(data as any);
    }

    return await aboutRepository.update(existing.id, data);
};

/**
 * Manage Paragraphs
 */
export const getAllParagraphs = () => paragraphRepository.findAll();

export const createParagraph = (data: any) => paragraphRepository.create(data);

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
 * Manage Stats (scoped to 'about' context)
 */
export const getAboutStats = () => statRepository.findAll('about');

export const createStat = (data: any) => statRepository.create({ ...data, context: 'about' });

export const updateStat = async (id: string, data: any) => {
    const existing = await statRepository.findById(id);
    if (!existing || existing.context !== 'about') throw new NotFoundError('Stat not found');
    return statRepository.update(id, data);
};

export const deleteStat = async (id: string) => {
    const existing = await statRepository.findById(id);
    if (!existing || existing.context !== 'about') throw new NotFoundError('Stat not found');
    return statRepository.deleteById(id);
};
