import { prisma, JobRole, Prisma } from '../prisma.client';

/**
 * Job Role Repository
 * Data access layer for professional titles (e.g., "Software Engineer")
 */

/**
 * Find all job roles ordered by index
 */
export const findAll = async (): Promise<JobRole[]> => {
    return await prisma.jobRole.findMany({
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find job role by ID
 */
export const findById = async (id: string): Promise<JobRole | null> => {
    return await prisma.jobRole.findUnique({ where: { id } });
};

/**
 * Create a new job role
 */
export const create = async (data: Prisma.JobRoleCreateInput): Promise<JobRole> => {
    return await prisma.jobRole.create({ data });
};

/**
 * Update a job role
 */
export const update = async (id: string, data: Prisma.JobRoleUpdateInput): Promise<JobRole> => {
    return await prisma.jobRole.update({
        where: { id },
        data,
    });
};

/**
 * Delete a job role
 */
export const deleteById = async (id: string): Promise<JobRole> => {
    return await prisma.jobRole.delete({ where: { id } });
};
