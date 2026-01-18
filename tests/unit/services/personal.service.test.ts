import * as personalService from '../../../src/core/services/personal.service';
import * as personalRepository from '../../../src/data/repositories/personal.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/personal.repository');

describe('Personal Service', () => {
    const mockPersonal = {
        id: '123',
        name: 'Abdul Aziz',
        title_prefix: 'Hi, I am',
        description: 'Software Engineer...',
        cv_file_path: '/cv.pdf',
        cv_download_name: 'CV.pdf',
        updated_at: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getPersonalContent', () => {
        it('should return personal content if it exists', async () => {
            (personalRepository.findFirst as jest.Mock).mockResolvedValue(mockPersonal);

            const result = await personalService.getPersonalContent();

            expect(result).toEqual(mockPersonal);
            expect(personalRepository.findFirst).toHaveBeenCalled();
        });

        it('should throw NotFoundError if no content exists', async () => {
            (personalRepository.findFirst as jest.Mock).mockResolvedValue(null);

            await expect(personalService.getPersonalContent()).rejects.toThrow(NotFoundError);
        });
    });

    describe('updatePersonalContent', () => {
        it('should update existing content if found', async () => {
            (personalRepository.findFirst as jest.Mock).mockResolvedValue(mockPersonal);
            (personalRepository.update as jest.Mock).mockResolvedValue({ ...mockPersonal, name: 'Updated' });

            const result = await personalService.updatePersonalContent({ name: 'Updated' });

            expect(result.name).toBe('Updated');
            expect(personalRepository.update).toHaveBeenCalledWith(mockPersonal.id, { name: 'Updated' });
        });

        it('should create new content if none exists', async () => {
            (personalRepository.findFirst as jest.Mock).mockResolvedValue(null);
            (personalRepository.create as jest.Mock).mockResolvedValue(mockPersonal);

            const result = await personalService.updatePersonalContent(mockPersonal);

            expect(result).toEqual(mockPersonal);
            expect(personalRepository.create).toHaveBeenCalledWith(mockPersonal);
        });
    });
});
