import { Router } from 'express';
import * as aboutController from './about.controller';
import { validate } from '../middlewares/validate.middleware';
import {
    aboutSectionSchema,
    updateAboutSectionSchema,
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
 * Get all About sections
 */
router.get('/', aboutController.getAbout);

// ====================
// Admin Routes (Sections)
// ====================

router.post(
    '/sections',
    authenticate,
    authorize(Role.ADMIN),
    validate(aboutSectionSchema),
    aboutController.createSection
);

router.patch(
    '/sections/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateAboutSectionSchema),
    aboutController.updateSection
);

router.delete(
    '/sections/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteResourceSchema),
    aboutController.deleteSection
);

// --- Paragraphs ---

router.post(
    '/sections/:sectionId/paragraphs',
    authenticate,
    authorize(Role.ADMIN),
    validate(paragraphSchema),
    aboutController.createParagraph
);

router.patch(
    '/paragraphs/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateParagraphSchema),
    aboutController.updateParagraph
);

router.delete(
    '/paragraphs/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteResourceSchema),
    aboutController.deleteParagraph
);

// --- Stats ---

router.post(
    '/sections/:sectionId/stats',
    authenticate,
    authorize(Role.ADMIN),
    validate(statSchema),
    aboutController.createStat
);

router.patch(
    '/stats/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateStatSchema),
    aboutController.updateStat
);

router.delete(
    '/stats/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(deleteResourceSchema),
    aboutController.deleteStat
);

export default router;
