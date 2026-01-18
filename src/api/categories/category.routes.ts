import { Router } from 'express';
import * as categoryController from './category.controller';
import { createCategorySchema, updateCategorySchema } from './category.schemas';
import { validate } from '@api/middlewares/validate.middleware';
import { authenticate, authorize } from '@api/middlewares/auth.middleware';
import { Role } from '@data/prisma.client';

const router = Router();

/**
 * @route   GET /api/v1/categories
 * @desc    Get all categories
 * @access  Public
 */
router.get('/', categoryController.getCategories);

/**
 * @route   GET /api/v1/categories/:id
 * @desc    Get category by ID
 * @access  Public
 */
router.get('/:id', categoryController.getCategory);

/**
 * @route   POST /api/v1/categories
 * @desc    Create a new category
 * @access  Private (Admin)
 */
router.post(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(createCategorySchema),
    categoryController.createCategory
);

/**
 * @route   PATCH /api/v1/categories/:id
 * @desc    Update a category
 * @access  Private (Admin)
 */
router.patch(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateCategorySchema),
    categoryController.updateCategory
);

/**
 * @route   DELETE /api/v1/categories/:id
 * @desc    Delete a category (soft delete)
 * @access  Private (Admin)
 */
router.delete(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    categoryController.deleteCategory
);

export default router;
