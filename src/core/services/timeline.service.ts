import * as educationRepository from '../../data/repositories/education.repository';
import * as experienceRepository from '../../data/repositories/experience.repository';
import { ExperienceWithRoles } from '../../data/repositories/experience.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { EducationEntry, ExperienceRole } from '../../data/prisma.client';

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
// Experience entries (organization + nested roles)
// ====================

export const getAllExperience = async (): Promise<ExperienceWithRoles[]> => {
    return await experienceRepository.findAll();
};

export const getExperienceById = async (id: string): Promise<ExperienceWithRoles> => {
    const entry = await experienceRepository.findById(id);
    if (!entry) throw new NotFoundError('Experience entry not found');
    return entry;
};

export const createExperience = async (data: any): Promise<ExperienceWithRoles> => {
    const { roles, ...organization } = data;
    return await experienceRepository.create({
        ...organization,
        roles: roles && roles.length > 0 ? { create: roles } : undefined,
    });
};

export const updateExperience = async (id: string, data: any): Promise<ExperienceWithRoles> => {
    await getExperienceById(id);
    const { roles, ...organization } = data;
    return await experienceRepository.update(id, organization);
};

export const deleteExperience = async (id: string): Promise<ExperienceWithRoles> => {
    const entry = await getExperienceById(id);
    await experienceRepository.deleteById(id);
    return entry;
};

// ====================
// Experience roles
// ====================

export const getRoleById = async (id: string): Promise<ExperienceRole> => {
    const role = await experienceRepository.findRoleById(id);
    if (!role) throw new NotFoundError('Experience role not found');
    return role;
};

export const createRole = async (experienceId: string, data: any): Promise<ExperienceRole> => {
    await getExperienceById(experienceId);
    return await experienceRepository.createRole({
        ...data,
        experience: { connect: { id: experienceId } },
    });
};

export const updateRole = async (id: string, data: any): Promise<ExperienceRole> => {
    await getRoleById(id);
    return await experienceRepository.updateRole(id, data);
};

export const deleteRole = async (id: string): Promise<ExperienceRole> => {
    await getRoleById(id);
    return await experienceRepository.deleteRole(id);
};

/**
 * Get all timeline data (combined for frontend)
 */
export const getTimelineData = async () => {
    const education = await educationRepository.findAll();
    const experience = await experienceRepository.findAll();
    return { education, experience };
};
