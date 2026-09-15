import { Router } from 'express';
import * as githubController from './github.controller';

/**
 * GitHub Proxy Routes
 * Path: /api/v1/github
 */
const router = Router();

/**
 * @route   GET /api/v1/github/stats
 * @desc    Get live GitHub stats for the portfolio owner (cached server-side)
 * @access  Public
 */
router.get('/stats', githubController.getGitHubStats);

/**
 * @route   GET /api/v1/github/repo
 * @desc    Get live stars/forks/last-pushed for a repo URL (cached server-side)
 * @access  Public
 */
router.get('/repo', githubController.getGitHubRepo);

export default router;
