import { Request, Response } from 'express';
import { healthCheck } from '../../src/api/health.controller';
import { prisma } from '../../src/data/prisma.client';

jest.mock('../../src/data/prisma.client', () => ({
    prisma: { $queryRaw: jest.fn() },
}));

describe('Health Controller', () => {
    const mockRes = () => {
        const res: Partial<Response> = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res as Response;
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 503 and disconnected status when the database check fails', async () => {
        (prisma.$queryRaw as unknown as jest.Mock).mockRejectedValue(new Error('connection refused'));
        const res = mockRes();

        await healthCheck({} as Request, res, jest.fn());

        expect(res.status).toHaveBeenCalledWith(503);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({ status: 'error', database: 'disconnected' })
        );
    });

    it('should return 200 and connected status when the database check succeeds', async () => {
        (prisma.$queryRaw as unknown as jest.Mock).mockResolvedValue([{ '?column?': 1 }]);
        const res = mockRes();

        await healthCheck({} as Request, res, jest.fn());

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({ status: 'ok', database: 'connected' })
        );
    });
});
