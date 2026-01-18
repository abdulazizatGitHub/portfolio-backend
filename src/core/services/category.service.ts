import * as categoryRepository from '@data/repositories/category.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { Category } from '@data/prisma.client';

/**
 * Category Service
 * Logic layer for category management
 */

/**
 * Get all categories
 */
export const getAllCategories = async (): Promise<Category[]> => {
    return await categoryRepository.findAll();
};

/**
 * Get category by ID
 */
export const getCategoryById = async (id: string): Promise<Category> => {
    const category = await categoryRepository.findById(id);
    if (!category) {
        throw new NotFoundError('Category not found', 'CATEGORY_NOT_FOUND');
    }
    return category;
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = async (slug: string): Promise<Category> => {
    const category = await categoryRepository.findBySlug(slug);
    if (!category) {
        throw new NotFoundError('Category not found', 'CATEGORY_NOT_FOUND');
    }
    return category;
};

/**
 * Create a new category
 */
export const createCategory = async (data: {
    name: string;
    slug: string;
    description?: string;
    order_index?: number;
}): Promise<Category> => {
    return await categoryRepository.create(data);
};

/**
 * Update an existing category
 */
export const updateCategory = async (
    id: string,
    data: {
        name?: string;
        slug?: string;
        description?: string | null;
        order_index?: number;
    }
): Promise<Category> => {
    // Check if exists
    await getCategoryById(id);

    return await categoryRepository.update(id, data);
};

/**
 * Soft delete a category
 */
export const deleteCategory = async (id: string): Promise<Category> => {
    // Check if exists
    await getCategoryById(id);

    return await categoryRepository.softDelete(id);
};
