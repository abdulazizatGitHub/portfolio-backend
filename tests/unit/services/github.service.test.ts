import { prisma } from '@data/prisma.client';
import { config } from '@core/config/env.config';
import { getGitHubStats, getRepoStats } from '@core/services/github.service';

jest.mock('@data/prisma.client', () => ({
    prisma: {
        gitHubCache: {
            findUnique: jest.fn(),
            update: jest.fn(),
            upsert: jest.fn(),
        },
    },
}));

const mockPrisma = prisma as unknown as {
    gitHubCache: {
        findUnique: jest.Mock;
        update: jest.Mock;
        upsert: jest.Mock;
    };
};

function jsonResponse(body: unknown, ok = true) {
    return { ok, json: async () => body } as Response;
}

describe('GitHub Service', () => {
    const originalFetch = global.fetch;

    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch = jest.fn();
    });

    afterAll(() => {
        global.fetch = originalFetch;
    });

    describe('getGitHubStats', () => {
        it('returns cached data without calling fetch when cache is fresh', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue({
                key: 'stats:octocat',
                data: { username: 'octocat', contributionsThisYear: 42 },
                cachedAt: new Date(),
            });

            const result = await getGitHubStats('octocat');

            expect(result).toEqual({ username: 'octocat', contributionsThisYear: 42 });
            expect(global.fetch).not.toHaveBeenCalled();
        });

        it('refetches and updates the cache when stale', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue({
                key: 'stats:octocat',
                data: { username: 'octocat', contributionsThisYear: 1 },
                cachedAt: new Date(Date.now() - 7 * 60 * 60 * 1000), // 7h old > 6h TTL
            });
            mockPrisma.gitHubCache.update.mockResolvedValue({});

            (global.fetch as jest.Mock)
                .mockResolvedValueOnce(jsonResponse({ public_repos: 5, created_at: '2020-01-01' })) // user
                .mockResolvedValueOnce(jsonResponse([])) // repos
                .mockResolvedValueOnce(jsonResponse({ contributions: [], total: {} })); // heatmap

            const result = await getGitHubStats('octocat');

            expect(mockPrisma.gitHubCache.update).toHaveBeenCalled();
            expect(result?.publicRepoCount).toBe(5);
        });

        it('falls back to stale cached data when refetch fails', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue({
                key: 'stats:octocat',
                data: { username: 'octocat', contributionsThisYear: 1 },
                cachedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
            });
            (global.fetch as jest.Mock).mockRejectedValue(new Error('network down'));

            const result = await getGitHubStats('octocat');

            expect(result).toEqual({ username: 'octocat', contributionsThisYear: 1, stale: true });
        });

        it('returns null when there is no cache and the fetch fails', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            (global.fetch as jest.Mock).mockRejectedValue(new Error('network down'));

            const result = await getGitHubStats('octocat');

            expect(result).toBeNull();
        });

        it('fetches fresh data and creates a cache entry when none exists', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            mockPrisma.gitHubCache.upsert.mockResolvedValue({});

            (global.fetch as jest.Mock)
                .mockResolvedValueOnce(jsonResponse({ public_repos: 3, created_at: '2021-05-01' }))
                .mockResolvedValueOnce(
                    jsonResponse([
                        {
                            stargazers_count: 2,
                            fork: false,
                            languages_url: 'https://api.github.com/repos/octocat/repo/languages',
                            pushed_at: '2026-01-01T00:00:00Z',
                        },
                    ])
                )
                .mockResolvedValueOnce(jsonResponse({ TypeScript: 300, JavaScript: 100 }))
                .mockResolvedValueOnce(jsonResponse({ contributions: [], total: {} }));

            const result = await getGitHubStats('octocat');

            expect(mockPrisma.gitHubCache.upsert).toHaveBeenCalled();
            expect(result?.publicRepoCount).toBe(3);
            expect(result?.totalStars).toBe(2);
            expect(result?.languages[0]).toEqual({ name: 'TypeScript', bytes: 300, percentage: 75 });
        });

        it('includes an Authorization header and computes streak/mostActiveDay when GITHUB_TOKEN is set', async () => {
            const originalToken = config.env.GITHUB_TOKEN;
            (config.env as any).GITHUB_TOKEN = 'test-token';

            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            mockPrisma.gitHubCache.upsert.mockResolvedValue({});

            const today = new Date();
            const yesterday = new Date(today.getTime() - 86400000);

            (global.fetch as jest.Mock)
                .mockResolvedValueOnce(jsonResponse({ public_repos: 1, created_at: '2021-05-01' }))
                .mockResolvedValueOnce(jsonResponse([]))
                .mockResolvedValueOnce(
                    jsonResponse({
                        contributions: [
                            { date: yesterday.toISOString().slice(0, 10), count: 2 },
                            { date: today.toISOString().slice(0, 10), count: 4 },
                        ],
                        total: {},
                    })
                );

            const result = await getGitHubStats('octocat');

            const userCallHeaders = (global.fetch as jest.Mock).mock.calls[0][1].headers;
            expect(userCallHeaders.Authorization).toBe('Bearer test-token');
            expect(result?.currentStreak).toBe(2);
            expect(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']).toContain(result?.mostActiveDay);

            (config.env as any).GITHUB_TOKEN = originalToken;
        });

        it('falls through to a fresh fetch when the initial cache lookup throws', async () => {
            mockPrisma.gitHubCache.findUnique.mockRejectedValue(new Error('db down'));
            mockPrisma.gitHubCache.upsert.mockResolvedValue({});

            (global.fetch as jest.Mock)
                .mockResolvedValueOnce(jsonResponse({ public_repos: 9, created_at: '2021-05-01' }))
                .mockResolvedValueOnce(jsonResponse([]))
                .mockResolvedValueOnce(jsonResponse({ contributions: [], total: {} }));

            const result = await getGitHubStats('octocat');

            expect(result?.publicRepoCount).toBe(9);
        });
    });

    describe('getRepoStats', () => {
        it('returns null for a non-GitHub URL', async () => {
            const result = await getRepoStats('https://example.com/not-a-repo');
            expect(result).toBeNull();
            expect(global.fetch).not.toHaveBeenCalled();
        });

        it('returns cached repo data without calling fetch when fresh', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue({
                key: 'repo:octocat/repo',
                data: { stars: 10, forks: 2, lastPushedAt: '2026-01-01', lastPushedRelative: '1 day ago' },
                cachedAt: new Date(),
            });

            const result = await getRepoStats('https://github.com/octocat/repo');

            expect(result?.stars).toBe(10);
            expect(global.fetch).not.toHaveBeenCalled();
        });

        it('fetches, caches, and returns fresh repo data', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            mockPrisma.gitHubCache.upsert.mockResolvedValue({});
            (global.fetch as jest.Mock).mockResolvedValue(
                jsonResponse({
                    stargazers_count: 7,
                    forks_count: 1,
                    pushed_at: '2026-01-01T00:00:00Z',
                })
            );

            const result = await getRepoStats('https://github.com/octocat/repo');

            expect(result?.stars).toBe(7);
            expect(result?.forks).toBe(1);
            expect(mockPrisma.gitHubCache.upsert).toHaveBeenCalled();
        });

        it('returns null when the GitHub API responds with a non-ok status', async () => {

            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            (global.fetch as jest.Mock).mockResolvedValue(jsonResponse({}, false));

            const result = await getRepoStats('https://github.com/octocat/repo');

            expect(result).toBeNull();
        });

        it('proceeds to fetch fresh data when the cache lookup throws', async () => {
            mockPrisma.gitHubCache.findUnique.mockRejectedValue(new Error('db down'));
            mockPrisma.gitHubCache.upsert.mockResolvedValue({});
            (global.fetch as jest.Mock).mockResolvedValue(
                jsonResponse({ stargazers_count: 3, forks_count: 0, pushed_at: '2026-01-01T00:00:00Z' })
            );

            const result = await getRepoStats('https://github.com/octocat/repo');

            expect(result?.stars).toBe(3);
        });

        it('returns null when the fetch call throws', async () => {
            mockPrisma.gitHubCache.findUnique.mockResolvedValue(null);
            (global.fetch as jest.Mock).mockRejectedValue(new Error('network down'));

            const result = await getRepoStats('https://github.com/octocat/repo');

            expect(result).toBeNull();
        });
    });
});
