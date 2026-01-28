import { prisma } from '../../data/prisma.client';
import { subDays, format } from 'date-fns';

/**
 * Dashboard Service
 * Aggregates analytics and content metrics for the admin console
 */
export class DashboardService {
    /**
     * Get Command Center Metrics
     * Aggregates all data required for the main dashboard view
     */
    static async getCommandCenterStats() {
        const now = new Date();
        const thirtyDaysAgo = subDays(now, 30);

        // 1. Basic Counts (Content Velocity)
        const [projectCount, skillCount, experienceCount, educationCount] = await Promise.all([
            prisma.project.count({ where: { deleted_at: null } }),
            prisma.skill.count(),
            prisma.experienceEntry.count(),
            prisma.educationEntry.count(),
        ]);

        // 2. Engagement Stats (Real-time Data)
        const [totalVisits, uniqueVisitors, pageViews] = await Promise.all([
            prisma.pageVisit.count(),
            prisma.pageVisit.groupBy({ by: ['ip_hash'] }).then(res => res.length),
            prisma.pageVisit.count(), // Currently same as totalVisits in this simple setup
        ]);

        // 3. Event Stats (Interest Level)
        const cvDownloads = await prisma.eventLog.count({
            where: { event_type: 'cv_download' }
        });

        // 4. Time-series Data (visitTrend)
        const visitTrendRaw = await prisma.pageVisit.findMany({
            where: { created_at: { gte: thirtyDaysAgo } },
            select: { created_at: true, ip_hash: true }
        });

        // Group by day
        const trendMap = new Map<string, { visits: number, uniqueVisitors: Set<string>, pageViews: number }>();

        // Initialize last 30 days
        for (let i = 29; i >= 0; i--) {
            const dateStr = format(subDays(now, i), 'yyyy-MM-dd');
            trendMap.set(dateStr, { visits: 0, uniqueVisitors: new Set(), pageViews: 0 });
        }

        visitTrendRaw.forEach(visit => {
            const dateStr = format(visit.created_at, 'yyyy-MM-dd');
            const dayData = trendMap.get(dateStr);
            if (dayData) {
                dayData.visits++;
                dayData.pageViews++;
                dayData.uniqueVisitors.add(visit.ip_hash || 'unknown');
            }
        });

        const visitTrend = Array.from(trendMap.entries()).map(([date, data]) => ({
            date,
            visits: data.visits,
            uniqueVisitors: data.uniqueVisitors.size,
            pageViews: data.pageViews
        }));

        // 5. Tech Stack Distribution (Deep Insights)
        const projectsWithSkills = await prisma.project.findMany({
            where: { deleted_at: null },
            include: { project_skills: { include: { skill: true } } }
        });

        const techCount: Record<string, number> = {};
        projectsWithSkills.forEach(p => {
            p.project_skills.forEach(ps => {
                techCount[ps.skill.name] = (techCount[ps.skill.name] || 0) + 1;
            });
        });

        const techStackDistribution = Object.entries(techCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([name, count]) => ({ name, count }));

        // 6. Top Pages (deep insights)
        const topPagesRaw = await prisma.pageVisit.groupBy({
            by: ['path'],
            _count: { path: true },
            orderBy: { _count: { path: 'desc' } },
            take: 5
        });

        const topPages = topPagesRaw.map(p => ({
            path: p.path,
            views: p._count.path,
        }));

        // 7. Device Breakdown
        const deviceRaw = await prisma.pageVisit.groupBy({
            by: ['device'],
            _count: { device: true }
        });

        const deviceBreakdown = deviceRaw.map(d => ({
            device: d.device || 'desktop',
            count: d._count.device
        }));

        // 8. Traffic Sources (Referrer grouping)
        const trafficSourcesRaw = await prisma.pageVisit.groupBy({
            by: ['referer'],
            _count: { referer: true },
            orderBy: { _count: { referer: 'desc' } },
            take: 10
        });

        const totalVisitsCount = totalVisits || 1;
        const trafficSources = trafficSourcesRaw.map(s => {
            let source = 'Direct';
            if (s.referer) {
                try {
                    const url = new URL(s.referer);
                    source = url.hostname.replace('www.', '');
                } catch {
                    source = s.referer;
                }
            }
            return {
                source,
                visits: s._count.referer,
                percentage: Math.round((s._count.referer / totalVisitsCount) * 100)
            };
        });

        // 9. Recent Activities
        const recentActivities = await prisma.activityLog.findMany({
            take: 10,
            orderBy: { created_at: 'desc' }
        });

        return {
            growthAnalytics: {
                totalVisits,
                uniqueVisitors,
                pageViews,
                cvDownloads
            },
            visitTrend,
            contentVelocity: {
                projects: projectCount,
                skills: skillCount,
                experience: experienceCount,
                education: educationCount
            },
            deepInsights: {
                techStack: techStackDistribution,
                topPages,
                deviceBreakdown,
                trafficSources
            },
            recentActivities
        };
    }
}
