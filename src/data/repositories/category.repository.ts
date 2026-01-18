import { prisma, Category, Prisma } from '../prisma.client';

/**
 * Category Repository
 * Data access layer for Category model
 */

/**
 * Find all categories (excluding soft-deleted)
 * @returns Array of categories ordered by order_index
 */
export const findAll = async (): Promise<Category[]> => {
    return await prisma.category.findMany({
        where: { deleted_at: null },
        orderBy: { order_index: 'asc' },
    });
};

/**
 * Find category by ID
 * @param id - Category ID
 * @returns Category or null if not found
 */
export const findById = async (id: string): Promise<Category | null> => {
    return await prisma.category.findFirst({
        where: {
            id,
            deleted_at: null,
        },
    });
};

/**
 * Find category by slug
 * @param slug - Category slug
 * @returns Category or null if not found
 */
export const findBySlug = async (slug: string): Promise<Category | null> => {
    return await prisma.category.findFirst({
        where: {
            slug,
            deleted_at: null,
        },
    });
};

/**
 * Create a new category
 * @param data - Category creation data
 * @returns Created category
 */
export const create = async (
    data: Prisma.CategoryCreateInput
): Promise<Category> => {
    return await prisma.category.create({
        data,
    });
};

/**
 * Update category by ID
 * @param id - Category ID
 * @param data - Category update data
 * @returns Updated category
 */
export const update = async (
    id: string,
    data: Prisma.CategoryUpdateInput
): Promise<Category> => {
    return await prisma.category.update({
        where: { id },
        data,
    });
};

/**
 * Soft delete category by ID
 * @param id - Category ID
 * @returns Soft-deleted category
 */
export const softDelete = async (id: string): Promise<Category> => {
    return await prisma.category.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
};

