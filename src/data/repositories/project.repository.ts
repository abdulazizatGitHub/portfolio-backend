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
 * Standard project inclusion for consistency
 */
const PROJECT_INCLUDE = {
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
        orderBy: { order_index: 'asc' as const },
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
};

/**
 * Find all projects with advanced options
 */
export const findAll = async (options: {
    skip?: number;
    take?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    category_id?: string;
    is_published?: boolean;
    featured?: boolean;
    includeDeleted?: boolean;
} = {}): Promise<ProjectWithRelations[]> => {
    const {
        skip,
        take,
        search,
        sortBy = 'order_index',
        sortOrder = 'asc',
        category_id,
        is_published,
        featured,
        includeDeleted = false,
    } = options;

    const where: Prisma.ProjectWhereInput = {
        deleted_at: includeDeleted ? undefined : null,
        category_id,
        is_published,
        featured,
        OR: search ? [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.project.findMany({
        where,
        skip,
        take,
        include: PROJECT_INCLUDE,
        orderBy: { [sortBy]: sortOrder },
    }) as ProjectWithRelations[];
};

/**
 * Count projects based on filters
 */
export const count = async (options: {
    search?: string;
    category_id?: string;
    is_published?: boolean;
    featured?: boolean;
    includeDeleted?: boolean;
} = {}): Promise<number> => {
    const { search, category_id, is_published, featured, includeDeleted = false } = options;

    const where: Prisma.ProjectWhereInput = {
        deleted_at: includeDeleted ? undefined : null,
        category_id,
        is_published,
        featured,
        OR: search ? [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.project.count({ where });
};

/**
 * Find project by ID with relations
 */
export const findById = async (
    id: string,
    includeDeleted = false
): Promise<ProjectWithRelations | null> => {
    return await prisma.project.findFirst({
        where: {
            id,
            deleted_at: includeDeleted ? undefined : null,
        },
        include: PROJECT_INCLUDE,
    }) as ProjectWithRelations | null;
};

/**
 * Create a new project
 */
export const create = async (data: Prisma.ProjectCreateInput): Promise<Project> => {
    return await prisma.project.create({ data });
};

/**
 * Update project by ID
 */
export const update = async (id: string, data: Prisma.ProjectUpdateInput): Promise<Project> => {
    return await prisma.project.update({ where: { id }, data });
};

/**
 * Soft delete project by ID
 */
export const softDelete = async (id: string): Promise<Project> => {
    return await prisma.project.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
};

/**
 * Restore soft-deleted project
 */
export const restore = async (id: string): Promise<Project> => {
    return await prisma.project.update({
        where: { id },
        data: { deleted_at: null },
    });
};
