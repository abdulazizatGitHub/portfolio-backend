import { prisma } from '../../data/prisma.client';

export enum ActivityAction {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    PUBLISH = 'PUBLISH',
    UNPUBLISH = 'UNPUBLISH',
}

export interface LogActivityParams {
    userId: string;
    action: ActivityAction;
    entityType: string;
    entityId?: string;
    entityName?: string;
    description: string;
}

export class ActivityService {
    /**
     * Log an administrative activity
     */
    static async log(params: LogActivityParams) {
        try {
            return await prisma.activityLog.create({
                data: {
                    user_id: params.userId,
                    action: params.action,
                    entity_type: params.entityType,
                    entity_id: params.entityId,
                    entity_name: params.entityName,
                    description: params.description,
                },
            });
        } catch (error) {
            // Non-blocking error logging
            console.error('Failed to log activity:', error);
            return null;
        }
    }

    /**
     * Get recent activities
     */
    static async getRecent(limit: number = 10) {
        return prisma.activityLog.findMany({
            take: limit,
            orderBy: {
                created_at: 'desc',
            },
        });
    }
}
