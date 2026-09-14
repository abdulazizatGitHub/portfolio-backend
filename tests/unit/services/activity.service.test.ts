import { ActivityService, ActivityAction } from '../../../src/core/services/activity.service';
import { prisma } from '../../../src/data/prisma.client';

jest.mock('../../../src/data/prisma.client', () => ({
    prisma: {
        activityLog: {
            create: jest.fn(),
            findMany: jest.fn(),
        },
    },
}));

describe('Activity Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    afterEach(() => {
        (console.error as jest.Mock).mockRestore();
    });

    describe('log', () => {
        it('should create an activity log entry', async () => {
            const mockLog = { id: 'log-1' };
            (prisma.activityLog.create as jest.Mock).mockResolvedValue(mockLog);

            const result = await ActivityService.log({
                userId: 'user-1',
                action: ActivityAction.CREATE,
                entityType: 'project',
                entityId: 'proj-1',
                entityName: 'My Project',
                description: 'Created project "My Project"',
            });

            expect(result).toEqual(mockLog);
            expect(prisma.activityLog.create).toHaveBeenCalledWith({
                data: expect.objectContaining({ user_id: 'user-1', action: 'CREATE' }),
            });
        });

        it('should swallow errors and return null (non-blocking)', async () => {
            (prisma.activityLog.create as jest.Mock).mockRejectedValue(new Error('db down'));

            const result = await ActivityService.log({
                userId: 'user-1',
                action: ActivityAction.DELETE,
                entityType: 'skill',
                description: 'Deleted skill',
            });

            expect(result).toBeNull();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('getRecent', () => {
        it('should return recent activity logs with the default limit', async () => {
            (prisma.activityLog.findMany as jest.Mock).mockResolvedValue([{ id: 'log-1' }]);

            const result = await ActivityService.getRecent();

            expect(result).toEqual([{ id: 'log-1' }]);
            expect(prisma.activityLog.findMany).toHaveBeenCalledWith(
                expect.objectContaining({ take: 10 })
            );
        });

        it('should respect a custom limit', async () => {
            (prisma.activityLog.findMany as jest.Mock).mockResolvedValue([]);
            await ActivityService.getRecent(5);
            expect(prisma.activityLog.findMany).toHaveBeenCalledWith(
                expect.objectContaining({ take: 5 })
            );
        });
    });
});
