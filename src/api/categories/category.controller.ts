import { Request, Response } from 'express';
import * as categoryService from '@core/services/category.service';

/**
 * Get all categories
 */
export const getCategories = async (_req: Request, res: Response) => {
    const categories = await categoryService.getAllCategories();

    res.status(200).json({
        status: 'success',
        data: { categories },
    });
};

/**
 * Get category by ID
 */
export const getCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const category = await categoryService.getCategoryById(id);

    res.status(200).json({
        status: 'success',
        data: { category },
    });
};

/**
 * Create a new category
 */
export const createCategory = async (req: Request, res: Response) => {
    const category = await categoryService.createCategory(req.body);

    res.status(201).json({
        status: 'success',
        data: { category },
    });
};

/**
 * Update an existing category
 */
export const updateCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const category = await categoryService.updateCategory(id, req.body);

    res.status(200).json({
        status: 'success',
        data: { category },
    });
};

/**
 * Delete a category
 */
export const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await categoryService.deleteCategory(id);

    res.status(204).send();
};
