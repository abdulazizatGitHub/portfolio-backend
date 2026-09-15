import { prisma } from '@data/prisma.client';
import { config } from '@core/config/env.config';
import { logger } from '@utils/logger';
import { GitHubStatsResponse, GitHubRepoResponse } from '@core/types/github.types';

const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

function githubHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };
    if (config.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${config.env.GITHUB_TOKEN}`;
    }
    return headers;
}

function relativeTime(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
}

function mostActiveDay(weeklyStats: Record<string, number>): string {
    let max = 0;
    let day = 'Weekdays';
    for (const [d, count] of Object.entries(weeklyStats)) {
        if (count > max) {
            max = count;
            day = d;
        }
    }
    return day;
}

async function fetchGitHubStats(username: string): Promise<GitHubStatsResponse> {
    const headers = githubHeaders();

    // 1. User profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    const user = (await userRes.json()) as any;

    // 2. All public repos (up to 100)
    const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
        { headers }
    );
    const repos = (await reposRes.json()) as any[];

    // 3. Aggregate stars and languages
    let totalStars = 0;
    const langBytes: Record<string, number> = {};

    await Promise.all(
        (Array.isArray(repos) ? repos : []).slice(0, 20).map(async (repo: any) => {
            totalStars += repo.stargazers_count || 0;
            if (!repo.fork) {
                try {
                    const langRes = await fetch(repo.languages_url, { headers });
                    const langs = (await langRes.json()) as Record<string, number>;
                    for (const [lang, bytes] of Object.entries(langs)) {
                        langBytes[lang] = (langBytes[lang] || 0) + (bytes as number);
                    }
                } catch {
                    // ignore individual repo language failures
                }
            }
        })
    );

    const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0);
    const languages = Object.entries(langBytes)
        .map(([name, bytes]) => ({
            name,
            bytes,
            percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
        }))
        .sort((a, b) => b.bytes - a.bytes)
        .slice(0, 5);

    // 4. Contribution heatmap (free third-party, no auth needed)
    let heatmap: Array<{ date: string; count: number }> = [];
    let contributionsThisYear = 0;
    let currentStreak = 0;
    let weeklyStats: Record<string, number> = {};

    try {
        const heatRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        const heatData = (await heatRes.json()) as any;
        heatmap = heatData.contributions || [];
        contributionsThisYear = heatData.total?.[new Date().getFullYear()] || 0;

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        weeklyStats = Object.fromEntries(days.map((d) => [d, 0]));

        let streak = 0;
        let counting = true;
        const sorted = [...heatmap].reverse();

        for (const day of sorted) {
            const dayName = days[new Date(day.date).getDay()] as string;
            weeklyStats[dayName] = (weeklyStats[dayName] || 0) + day.count;
            if (counting) {
                if (day.count > 0) streak++;
                else if (streak > 0) counting = false;
            }
        }
        currentStreak = streak;
    } catch {
        // heatmap is best-effort — keep empty defaults on failure
    }

    const lastPush = repos[0]?.pushed_at || new Date().toISOString();

    return {
        username,
        profileUrl: `https://github.com/${username}`,
        contributionsThisYear,
        currentStreak,
        lastCommitAt: lastPush,
        lastCommitRelative: relativeTime(lastPush),
        languages,
        publicRepoCount: user.public_repos || 0,
        totalStars,
        accountCreatedAt: user.created_at,
        mostActiveDay: mostActiveDay(weeklyStats),
        heatmap,
        cachedAt: new Date().toISOString(),
    };
}

export async function getGitHubStats(username: string): Promise<GitHubStatsResponse | null> {
    const cacheKey = `stats:${username}`;

    try {
        const cached = await prisma.gitHubCache.findUnique({ where: { key: cacheKey } });
        if (cached) {
            const age = Date.now() - new Date(cached.cachedAt).getTime();
            if (age < CACHE_TTL_MS) {
                return cached.data as unknown as GitHubStatsResponse;
            }
            try {
                const fresh = await fetchGitHubStats(username);
                await prisma.gitHubCache.update({
                    where: { key: cacheKey },
                    data: { data: fresh as any, cachedAt: new Date() },
                });
                return fresh;
            } catch {
                return { ...(cached.data as any), stale: true };
            }
        }
    } catch (e) {
        logger.error('[GitHub] Cache lookup failed:', e);
    }

    try {
        const stats = await fetchGitHubStats(username);
        await prisma.gitHubCache.upsert({
            where: { key: cacheKey },
            create: { key: cacheKey, data: stats as any },
            update: { data: stats as any, cachedAt: new Date() },
        });
        return stats;
    } catch (e) {
        logger.error('[GitHub] Failed to fetch stats:', e);
        return null;
    }
}

export async function getRepoStats(repoUrl: string): Promise<GitHubRepoResponse | null> {
    const match = repoUrl.match(/github\.com\/([^/]+\/[^/]+)/);
    if (!match) return null;

    const repoPath = (match[1] as string).replace(/\.git$/, '');
    const cacheKey = `repo:${repoPath}`;

    try {
        const cached = await prisma.gitHubCache.findUnique({ where: { key: cacheKey } });
        if (cached) {
            const age = Date.now() - new Date(cached.cachedAt).getTime();
            if (age < CACHE_TTL_MS) return cached.data as unknown as GitHubRepoResponse;
        }
    } catch (e) {
        logger.error('[GitHub] Repo cache lookup failed:', e);
    }

    try {
        const res = await fetch(`https://api.github.com/repos/${repoPath}`, {
            headers: githubHeaders(),
        });
        if (!res.ok) return null;
        const data = (await res.json()) as any;

        const result: GitHubRepoResponse = {
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            lastPushedAt: data.pushed_at,
            lastPushedRelative: relativeTime(data.pushed_at),
        };

        await prisma.gitHubCache.upsert({
            where: { key: cacheKey },
            create: { key: cacheKey, data: result as any },
            update: { data: result as any, cachedAt: new Date() },
        });

        return result;
    } catch (e) {
        logger.error('[GitHub] Failed to fetch repo stats:', e);
        return null;
    }
}
