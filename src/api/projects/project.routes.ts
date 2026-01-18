import { Router } from 'express';
import * as projectController from './project.controller';
import { createProjectSchema, updateProjectSchema, projectQuerySchema } from './project.schemas';
import { validate } from '@api/middlewares/validate.middleware';
import { authenticate, authorize } from '@api/middlewares/auth.middleware';
import { Role } from '@data/prisma.client';

const router = Router();

/**
 * @route   GET /api/v1/projects
 * @desc    Get all projects with pagination and filters
 * @access  Public
 */
router.get('/', validate(projectQuerySchema), projectController.getProjects);

/**
 * @route   GET /api/v1/projects/:id
 * @desc    Get project by ID
 * @access  Public
 */
router.get('/:id', projectController.getProject);

/**
 * @route   POST /api/v1/projects
 * @desc    Create a new project
 * @access  Private (Admin)
 */
router.post(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(createProjectSchema),
    projectController.createProject
);

/**
 * @route   PATCH /api/v1/projects/:id
 * @desc    Update an existing project
 * @access  Private (Admin)
 */
router.patch(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateProjectSchema),
    projectController.updateProject
);

/**
 * @route   PATCH /api/v1/projects/:id/restore
 * @desc    Restore a soft-deleted project
 * @access  Private (Admin)
 */
router.patch(
    '/:id/restore',
    authenticate,
    authorize(Role.ADMIN),
    projectController.restoreProject
);

/**
 * @route   DELETE /api/v1/projects/:id
 * @desc    Soft delete a project
 * @access  Private (Admin)
 */
router.delete(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    projectController.deleteProject
);

export default router;
