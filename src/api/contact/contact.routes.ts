import { Router } from 'express';
import * as contactController from './contact.controller';
import { validate } from '../middlewares/validate.middleware';
import {
    contactContentSchema,
    contactInfoSchema,
    updateContactInfoSchema,
    socialLinkSchema,
    updateSocialLinkSchema,
    contactResourceIdSchema
} from './contact.schemas';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '../../data/prisma.client';

/**
 * Contact & Social Links Routes
 * Path: /api/v1/contact
 */
const router = Router();

// ====================
// Public Routes
// ====================

/**
 * Get full contact data
 */
router.get('/', contactController.getContact);

// ====================
// Admin Routes
// ====================

/**
 * Update contact metadata
 */
router.put(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(contactContentSchema),
    contactController.updateContact
);

// --- Info Items ---

/**
 * Create a new contact info item
 */
router.post(
    '/info',
    authenticate,
    authorize(Role.ADMIN),
    validate(contactInfoSchema),
    contactController.createInfoItem
);

/**
 * Update a contact info item
 */
router.patch(
    '/info/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateContactInfoSchema),
    contactController.updateInfoItem
);

/**
 * Delete a contact info item
 */
router.delete(
    '/info/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(contactResourceIdSchema),
    contactController.deleteInfoItem
);

// --- Social Links ---

/**
 * Create a new social link
 */
router.post(
    '/socials',
    authenticate,
    authorize(Role.ADMIN),
    validate(socialLinkSchema),
    contactController.createSocialLink
);

/**
 * Update a social link
 */
router.patch(
    '/socials/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateSocialLinkSchema),
    contactController.updateSocialLink
);

/**
 * Delete a social link
 */
router.delete(
    '/socials/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(contactResourceIdSchema),
    contactController.deleteSocialLink
);

export default router;
