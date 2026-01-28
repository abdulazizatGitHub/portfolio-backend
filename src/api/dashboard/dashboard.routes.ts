import { Router } from 'express';
import * as dashboardController from './dashboard.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '../../data/prisma.client';

/**
 * Dashboard Routes
 * Path: /api/v1/dashboard
 */
const router = Router();

// Dashboard stats are Admin only
router.get('/stats', authenticate, authorize(Role.ADMIN), dashboardController.getStats);

export default router;
