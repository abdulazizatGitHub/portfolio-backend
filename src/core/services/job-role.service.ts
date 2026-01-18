import * as jobRoleRepository from '../../data/repositories/job-role.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { JobRole } from '../../data/prisma.client';

/**
 * Job Role Service
 * Business logic for professional titles
 */

/**
 * Get all job roles ordered by priority
 */
export const getAllJobRoles = async (): Promise<JobRole[]> => {
    return await jobRoleRepository.findAll();
};

/**
 * Get job role by ID
 * @throws {NotFoundError}
 */
export const getJobRoleById = async (id: string): Promise<JobRole> => {
    const role = await jobRoleRepository.findById(id);
    if (!role) {
        throw new NotFoundError('Job role not found');
    }
    return role;
};

/**
 * Create a new job role
 */
export const createJobRole = async (data: any): Promise<JobRole> => {
    return await jobRoleRepository.create(data);
};

/**
 * Update a job role
 */
export const updateJobRole = async (id: string, data: any): Promise<JobRole> => {
    // Ensure it exists
    await getJobRoleById(id);
    return await jobRoleRepository.update(id, data);
};

/**
 * Delete a job role
 */
export const deleteJobRole = async (id: string): Promise<JobRole> => {
    // Ensure it exists
    await getJobRoleById(id);
    return await jobRoleRepository.deleteById(id);
};
