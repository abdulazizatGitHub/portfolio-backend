import { Request, Response, NextFunction } from 'express';
import { getGitHubStats, getGitHubRepo } from '../../src/api/github/github.controller';
import * as githubService from '../../src/core/services/github.service';
import { config } from '../../src/core/config/env.config';

jest.mock('../../src/core/services/github.service');

describe('GitHub Controller', () => {
    const mockRes = () => {
        const res: Partial<Response> = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.set = jest.fn().mockReturnValue(res);
        return res as Response;
    };

    const next: NextFunction = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getGitHubStats', () => {
        it('passes a 503 error to next when GITHUB_USERNAME is not configured', async () => {
            const originalUsername = config.env.GITHUB_USERNAME;
            (config.env as any).GITHUB_USERNAME = '';

            await getGitHubStats({} as Request, mockRes(), next);

            expect(next).toHaveBeenCalledWith(
                expect.objectContaining({ statusCode: 503, code: 'GITHUB_NOT_CONFIGURED' })
            );

            (config.env as any).GITHUB_USERNAME = originalUsername;
        });

        it('passes a 503 error to next when the service returns null', async () => {
            const originalUsername = config.env.GITHUB_USERNAME;
            (config.env as any).GITHUB_USERNAME = 'octocat';
            (githubService.getGitHubStats as jest.Mock).mockResolvedValue(null);

            await getGitHubStats({} as Request, mockRes(), next);

            expect(next).toHaveBeenCalledWith(
                expect.objectContaining({ statusCode: 503, code: 'GITHUB_UNAVAILABLE' })
            );

            (config.env as any).GITHUB_USERNAME = originalUsername;
        });

        it('returns 200 with data when the service succeeds', async () => {
            const originalUsername = config.env.GITHUB_USERNAME;
            (config.env as any).GITHUB_USERNAME = 'octocat';
            const data = { username: 'octocat', contributionsThisYear: 10 };
            (githubService.getGitHubStats as jest.Mock).mockResolvedValue(data);
            const res = mockRes();

            await getGitHubStats({} as Request, res, next);

            expect(res.set).toHaveBeenCalledWith('Cache-Control', expect.any(String));
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ data }));

            (config.env as any).GITHUB_USERNAME = originalUsername;
        });
    });

    describe('getGitHubRepo', () => {
        it('passes a 400 error to next when url query param is missing', async () => {
            await getGitHubRepo({ query: {} } as Request, mockRes(), next);

            expect(next).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 400 }));
        });

        it('passes a 404 error to next when the service returns null', async () => {
            (githubService.getRepoStats as jest.Mock).mockResolvedValue(null);

            await getGitHubRepo(
                { query: { url: 'https://github.com/octocat/repo' } } as unknown as Request,
                mockRes(),
                next
            );

            expect(next).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 404 }));
        });

        it('returns 200 with data when the service succeeds', async () => {
            const data = { stars: 5, forks: 1, lastPushedAt: '2026-01-01', lastPushedRelative: '1 day ago' };
            (githubService.getRepoStats as jest.Mock).mockResolvedValue(data);
            const res = mockRes();

            await getGitHubRepo(
                { query: { url: 'https://github.com/octocat/repo' } } as unknown as Request,
                res,
                next
            );

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ data }));
        });
    });
});
