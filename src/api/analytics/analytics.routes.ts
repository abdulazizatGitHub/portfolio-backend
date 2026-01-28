import { Router } from 'express';
import * as analyticsController from './analytics.controller';
import { validate } from '../middlewares/validate.middleware';

/**
 * Analytics Routes
 * Path: /api/v1/analytics
 */
const router = Router();

// Public endpoint for frontend tracking
router.post('/events', validate(analyticsController.eventSchema), analyticsController.logEngagementEvent);

export default router;
