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
