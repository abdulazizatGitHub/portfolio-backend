import * as personalRepository from '../../data/repositories/personal.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { PersonalContent } from '../../data/prisma.client';

/**
 * Personal Content Service
 * Business logic for hero section content
 */

/**
 * Get personal content
 * @throws {NotFoundError} if no content exists
 */
export const getPersonalContent = async (): Promise<PersonalContent> => {
    const content = await personalRepository.findFirst();
    if (!content) {
        throw new NotFoundError('Personal content not found');
    }
    return content;
};

/**
 * Update personal content
 * Creates the entry if it doesn't exist (singleton pattern)
 */
export const updatePersonalContent = async (data: any): Promise<PersonalContent> => {
    const existing = await personalRepository.findFirst();

    if (!existing) {
        return await personalRepository.create(data);
    }

    return await personalRepository.update(existing.id, data);
};
