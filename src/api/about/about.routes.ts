import { Router } from 'express';
import * as aboutController from './about.controller';
import { validate } from '../middlewares/validate.middleware';
import {
    aboutContentSchema,
    paragraphSchema,
    updateParagraphSchema,
    statSchema,
    updateStatSchema,
    deleteResourceSchema
} from './about.schemas';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '../../data/prisma.client';

/**
 * About & Stats Routes
 * Path: /api/v1/about
 */
const router = Router();

// ====================
// Public Routes
// ====================

/**
 * Get full About section data
 */
router.get('/', aboutController.getAbout);

// ====================
// Admin Routes
// ====================

/**
 * Update about metadata (role title)
 */
router.put(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(aboutContentSchema),
    aboutController.updateAbout
);

// --- Paragraphs ---

/**
 * Create a new biography paragraph
 */
router.post(
    '/paragraphs',
    authenticate,
    authorize(Role.ADMIN),
    validate(paragraphSchema),
    aboutController.createParagraph
);

/**
 * Update a biography paragraph
 */
router.patch(
    '/paragraphs/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateParagraphSchema),
    aboutController.updateParagraph
);

/**
 * Delete a biography paragraph
 */
router.delete(
    '/paragraphs/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteResourceSchema),
    aboutController.deleteParagraph
);

// --- Stats ---

/**
 * Create a new professional stat
 */
router.post(
    '/stats',
    authenticate,
    authorize(Role.ADMIN),
    validate(statSchema),
    aboutController.createStat
);

/**
 * Update a professional stat
 */
router.patch(
    '/stats/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateStatSchema),
    aboutController.updateStat
);

/**
 * Delete a professional stat
 */
router.delete(
    '/stats/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteResourceSchema),
    aboutController.deleteStat
);

export default router;
