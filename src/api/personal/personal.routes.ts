import { Router } from 'express';
import * as personalController from './personal.controller';
import { validate } from '../middlewares/validate.middleware';
import {
    personalSchema,
    jobRoleSchema,
    updateJobRoleSchema,
    deleteJobRoleSchema
} from './personal.schemas';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '../../data/prisma.client';

/**
 * Personal & Job Role Routes
 * Path: /api/v1/personal
 */
const router = Router();

// ====================
// Public Routes
// ====================

/**
 * Get personal content
 */
router.get('/', personalController.getPersonal);

/**
 * Get all job roles
 */
router.get('/roles', personalController.getJobRoles);

// ====================
// Admin Routes
// ====================

/**
 * Update personal content (Upsert logic in service)
 */
router.put(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(personalSchema),
    personalController.updatePersonal
);

/**
 * Create a new job role
 */
router.post(
    '/roles',
    authenticate,
    authorize(Role.ADMIN),
    validate(jobRoleSchema),
    personalController.createJobRole
);

/**
 * Update a job role
 */
router.patch(
    '/roles/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateJobRoleSchema),
    personalController.updateJobRole
);

/**
 * Delete a job role
 */
router.delete(
    '/roles/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteJobRoleSchema),
    personalController.deleteJobRole
);

export default router;
