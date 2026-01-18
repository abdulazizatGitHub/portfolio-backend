import { prisma, Category, Prisma } from '../prisma.client';

/**
 * Category Repository
 * Data access layer for Category model
 */

/**
 * Find all categories with advanced options
 */
export const findAll = async (options: {
    skip?: number;
    take?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    includeDeleted?: boolean;
} = {}): Promise<Category[]> => {
    const {
        skip,
        take,
        search,
        sortBy = 'order_index',
        sortOrder = 'asc',
        includeDeleted = false,
    } = options;

    const where: Prisma.CategoryWhereInput = {
        deleted_at: includeDeleted ? undefined : null,
        OR: search ? [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.category.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder },
    });
};

/**
 * Count categories based on filters
 */
export const count = async (options: {
    search?: string;
    includeDeleted?: boolean;
} = {}): Promise<number> => {
    const { search, includeDeleted = false } = options;

    const where: Prisma.CategoryWhereInput = {
        deleted_at: includeDeleted ? undefined : null,
        OR: search ? [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
        ] : undefined,
    };

    return await prisma.category.count({ where });
};

/**
 * Restore a soft-deleted category
 */
export const restore = async (id: string): Promise<Category> => {
    return await prisma.category.update({
        where: { id },
        data: { deleted_at: null },
    });
};

/**
 * Find category by ID (can optionally include deleted)
 */
export const findById = async (id: string, includeDeleted = false): Promise<Category | null> => {
    return await prisma.category.findFirst({
        where: {
            id,
            deleted_at: includeDeleted ? undefined : null,
        },
    });
};

/**
 * Find category by slug (can optionally include deleted)
 */
export const findBySlug = async (slug: string, includeDeleted = false): Promise<Category | null> => {
    return await prisma.category.findFirst({
        where: {
            slug,
            deleted_at: includeDeleted ? undefined : null,
        },
    });
};

/**
 * Existing methods maintained with standard Prisma usage
 */
export const create = async (data: Prisma.CategoryCreateInput): Promise<Category> => {
    return await prisma.category.create({ data });
};

export const update = async (id: string, data: Prisma.CategoryUpdateInput): Promise<Category> => {
    return await prisma.category.update({ where: { id }, data });
};

export const softDelete = async (id: string): Promise<Category> => {
    return await prisma.category.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
};

