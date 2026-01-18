import { Router } from 'express';
import * as skillController from './skill.controller';
import { createSkillSchema, updateSkillSchema, skillQuerySchema } from './skill.schemas';
import { validate } from '@api/middlewares/validate.middleware';
import { authenticate, authorize } from '@api/middlewares/auth.middleware';
import { Role } from '@data/prisma.client';

const router = Router();

/**
 * @route   GET /api/v1/skills
 * @desc    Get all skills with pagination and filters
 * @access  Public
 */
router.get('/', validate(skillQuerySchema), skillController.getSkills);

/**
 * @route   GET /api/v1/skills/:id
 * @desc    Get skill by ID
 * @access  Public
 */
router.get('/:id', skillController.getSkill);

/**
 * @route   GET /api/v1/skills/slug/:slug
 * @desc    Get skill by slug
 * @access  Public
 */
router.get('/slug/:slug', skillController.getSkillBySlug);

/**
 * @route   POST /api/v1/skills
 * @desc    Create a new skill
 * @access  Private (Admin)
 */
router.post(
    '/',
    authenticate,
    authorize(Role.ADMIN),
    validate(createSkillSchema),
    skillController.createSkill
);

/**
 * @route   PATCH /api/v1/skills/:id
 * @desc    Update a skill
 * @access  Private (Admin)
 */
router.patch(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    validate(updateSkillSchema),
    skillController.updateSkill
);

/**
 * @route   DELETE /api/v1/skills/:id
 * @desc    Delete a skill
 * @access  Private (Admin)
 */
router.delete(
    '/:id',
    authenticate,
    authorize(Role.ADMIN),
    skillController.deleteSkill
);

export default router;
