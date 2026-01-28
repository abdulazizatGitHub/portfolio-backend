import * as contactRepository from '../../data/repositories/contact.repository';
import * as infoRepository from '../../data/repositories/contact-info.repository';
import * as socialRepository from '../../data/repositories/social-link.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { ContactContent, ContactInfoItem, SocialLink } from '../../data/prisma.client';

/**
 * Contact Service
 * Consolidated management for Contact section and connectivity
 */

/**
 * Get all contact and social data
 */
export const getContactData = async (): Promise<ContactContent & { infoItems: ContactInfoItem[]; socialLinks: SocialLink[] }> => {
    const content = await contactRepository.findFirst();
    const infoItems = await infoRepository.findAll();
    const socialLinks = await socialRepository.findAll();

    if (!content) {
        throw new NotFoundError('Contact content not found');
    }

    return {
        ...content,
        infoItems,
        socialLinks,
    };
};

/**
 * Update or create contact metadata
 */
export const updateContactContent = async (data: {
    subtitle?: string;
    info_title?: string;
    info_description?: string;
    success_title?: string;
    success_message?: string;
}): Promise<ContactContent> => {
    const existing = await contactRepository.findFirst();

    if (!existing) {
        return await contactRepository.create(data as any);
    }

    return await contactRepository.update(existing.id, data);
};

// --- Info Items ---

export const getAllInfoItems = () => infoRepository.findAll();

/**
 * Get contact info item by ID
 */
export const getInfoItemById = async (id: string): Promise<ContactInfoItem> => {
    const item = await infoRepository.findById(id);
    if (!item) {
        throw new NotFoundError('Contact info item not found');
    }
    return item;
};

export const createInfoItem = (data: any) => infoRepository.create(data);

export const updateInfoItem = async (id: string, data: any) => {
    const existing = await infoRepository.findById(id);
    if (!existing) throw new NotFoundError('Contact info item not found');
    return infoRepository.update(id, data);
};

export const deleteInfoItem = async (id: string) => {
    const existing = await infoRepository.findById(id);
    if (!existing) throw new NotFoundError('Contact info item not found');
    return infoRepository.deleteById(id);
};

// --- Social Links ---

export const getAllSocialLinks = () => socialRepository.findAll();

/**
 * Get social link by ID
 */
export const getSocialLinkById = async (id: string): Promise<SocialLink> => {
    const link = await socialRepository.findById(id);
    if (!link) {
        throw new NotFoundError('Social link not found');
    }
    return link;
};

export const createSocialLink = (data: any) => socialRepository.create(data);

export const updateSocialLink = async (id: string, data: any) => {
    const existing = await socialRepository.findById(id);
    if (!existing) throw new NotFoundError('Social link not found');
    return socialRepository.update(id, data);
};

export const deleteSocialLink = async (id: string) => {
    const existing = await socialRepository.findById(id);
    if (!existing) throw new NotFoundError('Social link not found');
    return socialRepository.deleteById(id);
};
