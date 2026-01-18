import * as jobRoleService from '../../../src/core/services/job-role.service';
import * as jobRoleRepository from '../../../src/data/repositories/job-role.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/job-role.repository');

describe('JobRole Service', () => {
    const mockRole = {
        id: 'role-1',
        label: 'Software Engineer',
        order_index: 0,
        created_at: new Date(),
        updated_at: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllJobRoles', () => {
        it('should return all job roles', async () => {
            (jobRoleRepository.findAll as jest.Mock).mockResolvedValue([mockRole]);

            const result = await jobRoleService.getAllJobRoles();

            expect(result).toEqual([mockRole]);
            expect(jobRoleRepository.findAll).toHaveBeenCalled();
        });
    });

    describe('createJobRole', () => {
        it('should create a new job role', async () => {
            (jobRoleRepository.create as jest.Mock).mockResolvedValue(mockRole);

            const result = await jobRoleService.createJobRole({ label: 'Engineer' });

            expect(result).toEqual(mockRole);
            expect(jobRoleRepository.create).toHaveBeenCalledWith({ label: 'Engineer' });
        });
    });

    describe('updateJobRole', () => {
        it('should update role if it exists', async () => {
            (jobRoleRepository.findById as jest.Mock).mockResolvedValue(mockRole);
            (jobRoleRepository.update as jest.Mock).mockResolvedValue({ ...mockRole, label: 'Fullstack' });

            const result = await jobRoleService.updateJobRole(mockRole.id, { label: 'Fullstack' });

            expect(result.label).toBe('Fullstack');
            expect(jobRoleRepository.update).toHaveBeenCalledWith(mockRole.id, { label: 'Fullstack' });
        });

        it('should throw NotFoundError if role missing', async () => {
            (jobRoleRepository.findById as jest.Mock).mockResolvedValue(null);

            await expect(jobRoleService.updateJobRole('invalid', { label: 'X' })).rejects.toThrow(NotFoundError);
        });
    });

    describe('deleteJobRole', () => {
        it('should delete role if it exists', async () => {
            (jobRoleRepository.findById as jest.Mock).mockResolvedValue(mockRole);
            (jobRoleRepository.deleteById as jest.Mock).mockResolvedValue(mockRole);

            const result = await jobRoleService.deleteJobRole(mockRole.id);

            expect(result).toEqual(mockRole);
            expect(jobRoleRepository.deleteById).toHaveBeenCalledWith(mockRole.id);
        });
    });
});
