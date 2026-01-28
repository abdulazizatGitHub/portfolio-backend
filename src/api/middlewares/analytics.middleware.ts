import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../data/prisma.client';
import crypto from 'crypto';

/**
 * Analytics Middleware
 * Tracks page visits for public routes
 */
export const trackVisit = async (_req: Request, _res: Response, next: NextFunction) => {
    // Only track GET requests (page views)
    if (_req.method !== 'GET') {
        return next();
    }

    try {
        const path = _req.originalUrl;
        const userAgent = _req.get('user-agent');
        const referer = _req.get('referer');
        const ip = _req.ip || _req.socket.remoteAddress || 'unknown';

        // Simple hash of IP to track unique visitors without storing sensitive PII
        const ipHash = crypto.createHash('md5').update(ip).digest('hex');

        // Basic device/browser detection from user agent
        const device = /mobile/i.test(userAgent || '') ? 'mobile' : 'desktop';

        // Log the visit asynchronously to avoid blocking the response
        prisma.pageVisit.create({
            data: {
                path,
                ip_hash: ipHash,
                user_agent: userAgent,
                referer,
                device,
            }
        }).catch(err => {
            // Silently log error, don't crash the request
            console.error('Failed to log page visit:', err);
        });

        next();
    } catch (error) {
        // Continue even if analytics fails
        next();
    }
};

/**
 * Event Logger Utility
 * Manual tracking for specific events (CV downloads, external link clicks)
 */
export const logEvent = async (type: string, category?: string, label?: string, metadata?: any) => {
    try {
        await prisma.eventLog.create({
            data: {
                event_type: type,
                category,
                label,
                metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : undefined,
            }
        });
    } catch (error) {
        console.error('Failed to log event:', error);
    }
};
