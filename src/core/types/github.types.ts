export interface GitHubLanguage {
    name: string;
    percentage: number;
    bytes: number;
}

export interface GitHubStatsResponse {
    username: string;
    profileUrl: string;
    contributionsThisYear: number;
    currentStreak: number;
    lastCommitAt: string;
    lastCommitRelative: string;
    languages: GitHubLanguage[];
    publicRepoCount: number;
    totalStars: number;
    accountCreatedAt: string;
    mostActiveDay: string;
    heatmap: Array<{ date: string; count: number }>;
    cachedAt: string;
    stale?: boolean;
}

export interface GitHubRepoResponse {
    stars: number;
    forks: number;
    lastPushedAt: string;
    lastPushedRelative: string;
}
