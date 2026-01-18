import { Router } from 'express';
import * as timelineController from './timeline.controller';
import { validate } from '../middlewares/validate.middleware';
import {
    educationPrismaSchema as educationSchema,
    updateEducationSchema,
    experiencePrismaSchema as experienceSchema,
    updateExperienceSchema,
    timelineIdSchema
} from './timeline.schemas';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '../../data/prisma.client';

/**
 * Timeline (Education & Experience) Routes
 * Path: /api/v1/timeline
 */
const router = Router();

// ====================
// Public Routes
// ====================

/**
 * Get unified timeline data
 */
router.get('/', timelineController.getTimeline);

/**
 * Get all education entries
 */
router.get('/education', timelineController.getAllEducation);

/**
 * Get all experience entries
 */
router.get('/experience', timelineController.getAllExperience);

// ====================
// Admin Routes (Education)
// ====================

/**
 * Create a new education entry
 */
router.post(
    '/education',
    authenticate,
    authorize(Role.ADMIN),
    validate(educationSchema),
    timelineController.createEducation
);

/**
 * Update an education entry
 */
router.patch(
    '/education/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateEducationSchema),
    timelineController.updateEducation
);

/**
 * Delete an education entry
 */
router.delete(
    '/education/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(timelineIdSchema),
    timelineController.deleteEducation
);

// ====================
// Admin Routes (Experience)
// ====================

/**
 * Create a new experience entry
 */
router.post(
    '/experience',
    authenticate,
    authorize(Role.ADMIN),
    validate(experienceSchema),
    timelineController.createExperience
);

/**
 * Update an experience entry
 */
router.patch(
    '/experience/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateExperienceSchema),
    timelineController.updateExperience
);

/**
 * Delete an experience entry
 */
router.delete(
    '/experience/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(timelineIdSchema),
    timelineController.deleteExperience
);

export default router;
