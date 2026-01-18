import { prisma, Project, Prisma } from '../prisma.client';

/**
 * Project Repository
 * Data access layer for Project model with relations
 */

/**
 * Project with all relations included
 */
export type ProjectWithRelations = Project & {
    category: {
        id: string;
        name: string;
        slug: string;
    };
    images: Array<{
        id: string;
        url: string;
        alt_text: string | null;
        is_thumbnail: boolean;
        order_index: number;
    }>;
    project_skills: Array<{
        skill: {
            id: string;
            name: string;
            slug: string;
            icon_url: string | null;
            category: string | null;
        };
    }>;
};

/**
 * Find all projects with optional filtering
 * @param filters - Optional filters for published, featured, category
 * @returns Array of projects with relations
 */
export const findAll = async (filters?: {
    is_published?: boolean;
    featured?: boolean;
    category_id?: string;
}): Promise<ProjectWithRelations[]> => {
    const where: Prisma.ProjectWhereInput = {
        deleted_at: null,
        ...filters,
    };

    return await prisma.project.findMany({
        where,
        include: {
            category: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                },
            },
            images: {
                select: {
                    id: true,
                    url: true,
                    alt_text: true,
                    is_thumbnail: true,
                    order_index: true,
                },
                orderBy: { order_index: 'asc' },
            },
            project_skills: {
                include: {
                    skill: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            icon_url: true,
                            category: true,
                        },
                    },
                },
            },
        },
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find project by ID with relations
 * @param id - Project ID
 * @returns Project with relations or null if not found
 */
export const findById = async (
    id: string
): Promise<ProjectWithRelations | null> => {
    return await prisma.project.findFirst({
        where: {
            id,
            deleted_at: null,
        },
        include: {
            category: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                },
            },
            images: {
                select: {
                    id: true,
                    url: true,
                    alt_text: true,
                    is_thumbnail: true,
                    order_index: true,
                },
                orderBy: { order_index: 'asc' },
            },
            project_skills: {
                include: {
                    skill: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            icon_url: true,
                            category: true,
                        },
                    },
                },
            },
        },
    });
};

/**
 * Find all published projects
 * @returns Array of published projects
 */
export const findPublished = async (): Promise<ProjectWithRelations[]> => {
    return await findAll({ is_published: true });
};

/**
 * Find all featured projects
 * @returns Array of featured projects
 */
export const findFeatured = async (): Promise<ProjectWithRelations[]> => {
    return await findAll({ featured: true, is_published: true });
};

/**
 * Create a new project
 * @param data - Project creation data
 * @returns Created project
 */
export const create = async (
    data: Prisma.ProjectCreateInput
): Promise<Project> => {
    return await prisma.project.create({
        data,
    });
};

/**
 * Update project by ID
 * @param id - Project ID
 * @param data - Project update data
 * @returns Updated project
 */
export const update = async (
    id: string,
    data: Prisma.ProjectUpdateInput
): Promise<Project> => {
    return await prisma.project.update({
        where: { id },
        data,
    });
};

/**
 * Soft delete project by ID
 * @param id - Project ID
 * @returns Soft-deleted project
 */
export const softDelete = async (id: string): Promise<Project> => {
    return await prisma.project.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
};

/**
 * Add skill to project
 * @param project_id - Project ID
 * @param skill_id - Skill ID
 * @returns Created ProjectSkill
 */
export const addSkill = async (
    project_id: string,
    skill_id: string
): Promise<void> => {
    await prisma.projectSkill.create({
        data: {
            project_id,
            skill_id,
        },
    });
};

/**
 * Remove skill from project
 * @param project_id - Project ID
 * @param skill_id - Skill ID
 */
export const removeSkill = async (
    project_id: string,
    skill_id: string
): Promise<void> => {
    await prisma.projectSkill.delete({
        where: {
            project_id_skill_id: {
                project_id,
                skill_id,
            },
        },
    });
};

