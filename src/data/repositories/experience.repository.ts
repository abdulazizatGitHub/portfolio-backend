import { prisma, Experience, ExperienceRole, Prisma } from '../prisma.client';

/**
 * Experience Repository
 * Data access layer for professional work history (organization + nested roles)
 */

export type ExperienceWithRoles = Experience & { roles: ExperienceRole[] };

/**
 * Find all experience entries with their roles, ordered by index
 */
export const findAll = async (): Promise<ExperienceWithRoles[]> => {
    return await prisma.experience.findMany({
        include: { roles: { orderBy: { order_index: 'asc' } } },
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find experience entry by ID (with roles)
 */
export const findById = async (id: string): Promise<ExperienceWithRoles | null> => {
    return await prisma.experience.findUnique({
        where: { id },
        include: { roles: { orderBy: { order_index: 'asc' } } },
    });
};

/**
 * Create a new experience entry
 */
export const create = async (data: Prisma.ExperienceCreateInput): Promise<ExperienceWithRoles> => {
    return await prisma.experience.create({
        data,
        include: { roles: { orderBy: { order_index: 'asc' } } },
    });
};

/**
 * Update an experience entry
 */
export const update = async (id: string, data: Prisma.ExperienceUpdateInput): Promise<ExperienceWithRoles> => {
    return await prisma.experience.update({
        where: { id },
        data,
        include: { roles: { orderBy: { order_index: 'asc' } } },
    });
};

/**
 * Delete an experience entry (cascades to its roles)
 */
export const deleteById = async (id: string): Promise<Experience> => {
    return await prisma.experience.delete({ where: { id } });
};

// ====================
// Experience Roles
// ====================

export const findRoleById = async (id: string): Promise<ExperienceRole | null> => {
    return await prisma.experienceRole.findUnique({ where: { id } });
};

export const createRole = async (data: Prisma.ExperienceRoleCreateInput): Promise<ExperienceRole> => {
    return await prisma.experienceRole.create({ data });
};

export const updateRole = async (id: string, data: Prisma.ExperienceRoleUpdateInput): Promise<ExperienceRole> => {
    return await prisma.experienceRole.update({ where: { id }, data });
};

export const deleteRole = async (id: string): Promise<ExperienceRole> => {
    return await prisma.experienceRole.delete({ where: { id } });
};
