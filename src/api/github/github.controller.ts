import { Request, Response, NextFunction } from 'express';
import * as githubService from '@core/services/github.service';
import { config } from '@core/config/env.config';
import { sendSuccess } from '@utils/response';
import { AppError, BadRequestError, NotFoundError } from '@core/exceptions/app-errors';

/**
 * Get live GitHub stats for the configured portfolio owner
 */
export const getGitHubStats = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        if (!config.env.GITHUB_USERNAME) {
            throw new AppError(
                'GitHub username not configured',
                503,
                'GITHUB_NOT_CONFIGURED'
            );
        }

        const data = await githubService.getGitHubStats(config.env.GITHUB_USERNAME);
        if (!data) {
            throw new AppError('GitHub data unavailable', 503, 'GITHUB_UNAVAILABLE');
        }

        res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=21600');
        sendSuccess(res, 'GitHub stats retrieved', data);
    } catch (error) {
        next(error);
    }
};

/**
 * Get live stars/forks/last-pushed data for a single GitHub repo URL
 */
export const getGitHubRepo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { url } = req.query;
        if (!url || typeof url !== 'string') {
            throw new BadRequestError('url query param required');
        }

        const data = await githubService.getRepoStats(url);
        if (!data) {
            throw new NotFoundError('Repo data unavailable');
        }

        res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=21600');
        sendSuccess(res, 'GitHub repo stats retrieved', data);
    } catch (error) {
        next(error);
    }
};
