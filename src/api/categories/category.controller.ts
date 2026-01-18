import { Request, Response } from 'express';
import * as categoryService from '@core/services/category.service';
import { sendSuccess, sendList } from '@utils/response';

/**
 * Get all categories with pagination and filters
 */
export const getCategories = async (req: Request, res: Response) => {
    const { page, limit, search, sortBy, sortOrder, includeDeleted } = req.query;

    const { categories, total } = await categoryService.getAllCategories({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        search: search as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as 'asc' | 'desc',
        includeDeleted: includeDeleted === 'true',
    });

    return sendList(res, 'Categories retrieved successfully', categories, {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 10,
        total,
    });
};

/**
 * Get category by ID
 */
export const getCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const category = await categoryService.getCategoryById(id);
    return sendSuccess(res, 'Category retrieved successfully', category);
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = async (req: Request, res: Response) => {
    const slug = req.params.slug as string;
    const category = await categoryService.getCategoryBySlug(slug);
    return sendSuccess(res, 'Category retrieved successfully', category);
};

/**
 * Create a new category
 */
export const createCategory = async (req: Request, res: Response) => {
    const category = await categoryService.createCategory(req.body);
    return sendSuccess(res, 'Category created successfully', category, 201);
};

/**
 * Update an existing category
 */
export const updateCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const category = await categoryService.updateCategory(id, req.body);
    return sendSuccess(res, 'Category updated successfully', category);
};

/**
 * Restore a soft-deleted category
 */
export const restoreCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const category = await categoryService.restoreCategory(id);
    return sendSuccess(res, 'Category restored successfully', category);
};

/**
 * Delete a category
 */
export const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await categoryService.deleteCategory(id);
    return res.status(204).send();
};
