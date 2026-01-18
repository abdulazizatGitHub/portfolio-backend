import * as categoryRepository from '@data/repositories/category.repository';
import { NotFoundError, ConflictError } from '../exceptions/app-errors';
import { Category } from '@data/prisma.client';
import { slugify } from '@utils/slugify';

/**
 * Get all categories with pagination and filters
 */
export const getAllCategories = async (options: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    includeDeleted?: boolean;
} = {}): Promise<{ categories: Category[]; total: number }> => {
    const {
        page = 1,
        limit = 10,
        ...filters
    } = options;

    const skip = (page - 1) * limit;

    const [categories, total] = await Promise.all([
        categoryRepository.findAll({ ...filters, skip, take: limit }),
        categoryRepository.count(filters),
    ]);

    return { categories, total };
};

/**
 * Get category by ID
 */
export const getCategoryById = async (id: string, includeDeleted = false): Promise<Category> => {
    const category = await categoryRepository.findById(id, includeDeleted);
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
    slug?: string;
    description?: string;
    order_index?: number;
}): Promise<Category> => {
    // 1. Generate slug if missing
    const slug = data.slug ? slugify(data.slug) : slugify(data.name);

    // 2. Check uniqueness
    const existing = await categoryRepository.findBySlug(slug, true);
    if (existing) {
        throw new ConflictError('Category slug already exists', 'CATEGORY_SLUG_CONFLICT');
    }

    return await categoryRepository.create({
        ...data,
        slug,
    });
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

    // If slug is updated, check uniqueness
    if (data.slug) {
        const slug = slugify(data.slug);
        const existing = await categoryRepository.findBySlug(slug, true);
        if (existing && existing.id !== id) {
            throw new ConflictError('Category slug already exists', 'CATEGORY_SLUG_CONFLICT');
        }
        data.slug = slug;
    }

    return await categoryRepository.update(id, data);
};

/**
 * Restore a soft-deleted category
 */
export const restoreCategory = async (id: string): Promise<Category> => {
    const category = await getCategoryById(id, true);
    if (category.deleted_at === null) {
        return category;
    }
    return await categoryRepository.restore(id);
};

/**
 * Soft delete a category
 */
export const deleteCategory = async (id: string): Promise<Category> => {
    await getCategoryById(id);
    return await categoryRepository.softDelete(id);
};
