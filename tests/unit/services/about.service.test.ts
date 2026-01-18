import * as aboutService from '../../../src/core/services/about.service';
import * as aboutRepository from '../../../src/data/repositories/about.repository';
import * as paragraphRepository from '../../../src/data/repositories/about-paragraph.repository';
import * as statRepository from '../../../src/data/repositories/stat.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/about.repository');
jest.mock('../../../src/data/repositories/about-paragraph.repository');
jest.mock('../../../src/data/repositories/stat.repository');

describe('About Service', () => {
    const mockContent = { id: 'about-1', role_title: 'Fullstack Dev' };
    const mockParagraph = { id: 'p-1', content: 'Bio content...', order_index: 0 };
    const mockStat = { id: 's-1', label: 'Projects', value: '10+', context: 'about' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAboutData', () => {
        it('should return aggregated data if content exists', async () => {
            (aboutRepository.findFirst as jest.Mock).mockResolvedValue(mockContent);
            (paragraphRepository.findAll as jest.Mock).mockResolvedValue([mockParagraph]);
            (statRepository.findAll as jest.Mock).mockResolvedValue([mockStat]);

            const result = await aboutService.getAboutData();

            expect(result.role_title).toBe(mockContent.role_title);
            expect(result.paragraphs).toHaveLength(1);
            expect(result.stats).toHaveLength(1);
        });

        it('should throw NotFoundError if no metadata', async () => {
            (aboutRepository.findFirst as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.getAboutData()).rejects.toThrow(NotFoundError);
        });
    });

    describe('Paragraph Management', () => {
        it('should create paragraph', async () => {
            (paragraphRepository.create as jest.Mock).mockResolvedValue(mockParagraph);
            const result = await aboutService.createParagraph({ content: 'New bio' });
            expect(result).toEqual(mockParagraph);
        });

        it('should throw on update if missing', async () => {
            (paragraphRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.updateParagraph('invalid', {})).rejects.toThrow(NotFoundError);
        });
    });

    describe('Stat Management', () => {
        it('should create stat with about context', async () => {
            (statRepository.create as jest.Mock).mockResolvedValue(mockStat);
            await aboutService.createStat({ label: 'X', value: 'Y' });
            expect(statRepository.create).toHaveBeenCalledWith(expect.objectContaining({ context: 'about' }));
        });

        it('should throw on update if context mismatch or missing', async () => {
            (statRepository.findById as jest.Mock).mockResolvedValue({ ...mockStat, context: 'other' });
            await expect(aboutService.updateStat(mockStat.id, {})).rejects.toThrow(NotFoundError);
        });
    });
});
