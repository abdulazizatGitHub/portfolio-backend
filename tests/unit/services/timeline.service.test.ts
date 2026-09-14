import * as timelineService from '../../../src/core/services/timeline.service';
import * as educationRepository from '../../../src/data/repositories/education.repository';
import * as experienceRepository from '../../../src/data/repositories/experience.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/education.repository');
jest.mock('../../../src/data/repositories/experience.repository');

describe('Timeline Service', () => {
    const mockEdu = { id: 'edu-1', title: 'B.S. CS', period: '2020-2024', description: 'Study...' };
    const mockExp = { id: 'exp-1', title: 'Dev', period: '2024-Present', description: 'Work...' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Education Management', () => {
        it('should return all education entries', async () => {
            (educationRepository.findAll as jest.Mock).mockResolvedValue([mockEdu]);
            const result = await timelineService.getAllEducation();
            expect(result).toEqual([mockEdu]);
        });

        it('should create education entry', async () => {
            (educationRepository.create as jest.Mock).mockResolvedValue(mockEdu);
            const result = await timelineService.createEducation({ title: 'X' });
            expect(result).toEqual(mockEdu);
        });

        it('should throw on update if missing', async () => {
            (educationRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(timelineService.updateEducation('invalid', {})).rejects.toThrow(NotFoundError);
        });
    });

    describe('Experience Management', () => {
        it('should return all experience entries', async () => {
            (experienceRepository.findAll as jest.Mock).mockResolvedValue([mockExp]);
            const result = await timelineService.getAllExperience();
            expect(result).toEqual([mockExp]);
        });

        it('should throw on delete if missing', async () => {
            (experienceRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(timelineService.deleteExperience('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should create experience with nested roles', async () => {
            (experienceRepository.create as jest.Mock).mockResolvedValue(mockExp);
            const roles = [{ job_title: 'Dev', start_date: '2024-01-01', description: 'Work...', order_index: 0 }];
            const result = await timelineService.createExperience({ organization: 'Acme', roles });

            expect(experienceRepository.create).toHaveBeenCalledWith(
                expect.objectContaining({ organization: 'Acme', roles: { create: roles } })
            );
            expect(result).toEqual(mockExp);
        });

        it('should create experience without roles', async () => {
            (experienceRepository.create as jest.Mock).mockResolvedValue(mockExp);
            await timelineService.createExperience({ organization: 'Acme' });

            expect(experienceRepository.create).toHaveBeenCalledWith(
                expect.objectContaining({ organization: 'Acme', roles: undefined })
            );
        });

        it('should update experience organization fields only', async () => {
            (experienceRepository.findById as jest.Mock).mockResolvedValue(mockExp);
            (experienceRepository.update as jest.Mock).mockResolvedValue(mockExp);

            await timelineService.updateExperience('exp-1', { organization: 'New Co', roles: [{}] });

            expect(experienceRepository.update).toHaveBeenCalledWith('exp-1', { organization: 'New Co' });
        });

        it('should return the deleted experience entry', async () => {
            (experienceRepository.findById as jest.Mock).mockResolvedValue(mockExp);
            (experienceRepository.deleteById as jest.Mock).mockResolvedValue(mockExp);

            const result = await timelineService.deleteExperience('exp-1');
            expect(result).toEqual(mockExp);
        });
    });

    describe('Experience Role Management', () => {
        const mockRole = { id: 'role-1', job_title: 'Dev', experience_id: 'exp-1' };

        it('should throw NotFoundError when role is missing', async () => {
            (experienceRepository.findRoleById as jest.Mock).mockResolvedValue(null);
            await expect(timelineService.getRoleById('missing')).rejects.toThrow(NotFoundError);
        });

        it('should create a role under an existing experience', async () => {
            (experienceRepository.findById as jest.Mock).mockResolvedValue(mockExp);
            (experienceRepository.createRole as jest.Mock).mockResolvedValue(mockRole);

            const result = await timelineService.createRole('exp-1', { job_title: 'Dev' });

            expect(experienceRepository.createRole).toHaveBeenCalledWith(
                expect.objectContaining({ job_title: 'Dev', experience: { connect: { id: 'exp-1' } } })
            );
            expect(result).toEqual(mockRole);
        });

        it('should throw when creating a role under a missing experience', async () => {
            (experienceRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(timelineService.createRole('missing', {})).rejects.toThrow(NotFoundError);
        });

        it('should update an existing role', async () => {
            (experienceRepository.findRoleById as jest.Mock).mockResolvedValue(mockRole);
            (experienceRepository.updateRole as jest.Mock).mockResolvedValue({ ...mockRole, job_title: 'Lead Dev' });

            const result = await timelineService.updateRole('role-1', { job_title: 'Lead Dev' });
            expect(result.job_title).toBe('Lead Dev');
        });

        it('should delete an existing role', async () => {
            (experienceRepository.findRoleById as jest.Mock).mockResolvedValue(mockRole);
            (experienceRepository.deleteRole as jest.Mock).mockResolvedValue(mockRole);

            const result = await timelineService.deleteRole('role-1');
            expect(result).toEqual(mockRole);
        });
    });

    describe('getTimelineData', () => {
        it('should return consolidated data', async () => {
            (educationRepository.findAll as jest.Mock).mockResolvedValue([mockEdu]);
            (experienceRepository.findAll as jest.Mock).mockResolvedValue([mockExp]);
            const result = await timelineService.getTimelineData();
            expect(result.education).toHaveLength(1);
            expect(result.experience).toHaveLength(1);
        });
    });
});
