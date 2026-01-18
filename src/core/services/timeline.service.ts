import * as educationRepository from '../../data/repositories/education.repository';
import * as experienceRepository from '../../data/repositories/experience.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { EducationEntry, ExperienceEntry } from '../../data/prisma.client';

/**
 * Timeline Service
 * Logic for managing Education and Experience entries
 */

// ====================
// Education entries
// ====================

export const getAllEducation = async (): Promise<EducationEntry[]> => {
    return await educationRepository.findAll();
};

export const getEducationById = async (id: string): Promise<EducationEntry> => {
    const entry = await educationRepository.findById(id);
    if (!entry) throw new NotFoundError('Education entry not found');
    return entry;
};

export const createEducation = async (data: any): Promise<EducationEntry> => {
    return await educationRepository.create(data);
};

export const updateEducation = async (id: string, data: any): Promise<EducationEntry> => {
    await getEducationById(id);
    return await educationRepository.update(id, data);
};

export const deleteEducation = async (id: string): Promise<EducationEntry> => {
    await getEducationById(id);
    return await educationRepository.deleteById(id);
};

// ====================
// Experience entries
// ====================

export const getAllExperience = async (): Promise<ExperienceEntry[]> => {
    return await experienceRepository.findAll();
};

export const getExperienceById = async (id: string): Promise<ExperienceEntry> => {
    const entry = await experienceRepository.findById(id);
    if (!entry) throw new NotFoundError('Experience entry not found');
    return entry;
};

export const createExperience = async (data: any): Promise<ExperienceEntry> => {
    return await experienceRepository.create(data);
};

export const updateExperience = async (id: string, data: any): Promise<ExperienceEntry> => {
    await getExperienceById(id);
    return await experienceRepository.update(id, data);
};

export const deleteExperience = async (id: string): Promise<ExperienceEntry> => {
    await getExperienceById(id);
    return await experienceRepository.deleteById(id);
};

/**
 * Get all timeline data (combined for frontend)
 */
export const getTimelineData = async () => {
    const education = await educationRepository.findAll();
    const experience = await experienceRepository.findAll();
    return { education, experience };
};
