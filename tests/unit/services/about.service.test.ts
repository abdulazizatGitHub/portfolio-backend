import * as aboutService from '../../../src/core/services/about.service';
import * as aboutRepository from '../../../src/data/repositories/about.repository';
import * as paragraphRepository from '../../../src/data/repositories/about-paragraph.repository';
import * as statRepository from '../../../src/data/repositories/stat.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/about.repository');
jest.mock('../../../src/data/repositories/about-paragraph.repository');
jest.mock('../../../src/data/repositories/stat.repository');

describe('About Service', () => {
    const mockSection = {
        id: 'about-1',
        role_title: 'Fullstack Dev',
        paragraphs: [{ id: 'p-1', content: 'Bio content...', order_index: 0 }],
        stats: [{ id: 's-1', label: 'Projects', value: '10+', order_index: 0 }],
    };
    const mockParagraph = { id: 'p-1', content: 'Bio content...', order_index: 0, about_content_id: 'about-1' };
    const mockStat = { id: 's-1', label: 'Projects', value: '10+', order_index: 0, about_content_id: 'about-1' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAboutData', () => {
        it('should return all sections with paragraphs and stats', async () => {
            (aboutRepository.findAll as jest.Mock).mockResolvedValue([mockSection]);

            const result = await aboutService.getAboutData();

            expect(result).toHaveLength(1);
            expect(result[0]!.role_title).toBe(mockSection.role_title);
            expect(result[0]!.paragraphs).toHaveLength(1);
            expect(result[0]!.stats).toHaveLength(1);
        });
    });

    describe('Section Management', () => {
        it('should throw NotFoundError when getting a missing section', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.getSectionById('missing')).rejects.toThrow(NotFoundError);
        });

        it('should update an existing section', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(mockSection);
            (aboutRepository.update as jest.Mock).mockResolvedValue({ ...mockSection, role_title: 'Updated' });

            const result = await aboutService.updateSection('about-1', { role_title: 'Updated' });
            expect(result.role_title).toBe('Updated');
        });
    });

    describe('Paragraph Management', () => {
        it('should create a paragraph scoped to a section', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(mockSection);
            (paragraphRepository.create as jest.Mock).mockResolvedValue(mockParagraph);

            const result = await aboutService.createParagraph('about-1', { content: 'New bio' });

            expect(result).toEqual(mockParagraph);
            expect(paragraphRepository.create).toHaveBeenCalled();
        });

        it('should throw on update if missing', async () => {
            (paragraphRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.updateParagraph('invalid', {})).rejects.toThrow(NotFoundError);
        });

        it('should update an existing paragraph', async () => {
            (paragraphRepository.findById as jest.Mock).mockResolvedValue(mockParagraph);
            (paragraphRepository.update as jest.Mock).mockResolvedValue({ ...mockParagraph, content: 'Updated' });

            const result = await aboutService.updateParagraph('p-1', { content: 'Updated' });
            expect(result.content).toBe('Updated');
        });

        it('should throw on delete if missing', async () => {
            (paragraphRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.deleteParagraph('invalid')).rejects.toThrow(NotFoundError);
        });

        it('should delete an existing paragraph', async () => {
            (paragraphRepository.findById as jest.Mock).mockResolvedValue(mockParagraph);
            (paragraphRepository.deleteById as jest.Mock).mockResolvedValue(mockParagraph);

            const result = await aboutService.deleteParagraph('p-1');
            expect(result).toEqual(mockParagraph);
        });
    });

    describe('Stat Management', () => {
        it('should create a stat scoped to a section', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(mockSection);
            (statRepository.create as jest.Mock).mockResolvedValue(mockStat);

            const result = await aboutService.createStat('about-1', { label: 'X', value: 'Y' });

            expect(result).toEqual(mockStat);
        });

        it('should throw on update if missing', async () => {
            (statRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.updateStat('missing', {})).rejects.toThrow(NotFoundError);
        });

        it('should update an existing stat', async () => {
            (statRepository.findById as jest.Mock).mockResolvedValue(mockStat);
            (statRepository.update as jest.Mock).mockResolvedValue({ ...mockStat, value: '20+' });

            const result = await aboutService.updateStat('s-1', { value: '20+' });
            expect(result.value).toBe('20+');
        });

        it('should throw on delete if missing', async () => {
            (statRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.deleteStat('missing')).rejects.toThrow(NotFoundError);
        });

        it('should delete an existing stat', async () => {
            (statRepository.findById as jest.Mock).mockResolvedValue(mockStat);
            (statRepository.deleteById as jest.Mock).mockResolvedValue(mockStat);

            const result = await aboutService.deleteStat('s-1');
            expect(result).toEqual(mockStat);
        });
    });

    describe('Section retrieval and deletion', () => {
        it('should delete an existing section', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(mockSection);
            (aboutRepository.deleteById as jest.Mock).mockResolvedValue(mockSection);

            const result = await aboutService.deleteSection('about-1');
            expect(result).toEqual(mockSection);
        });

        it('should throw on delete if section missing', async () => {
            (aboutRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(aboutService.deleteSection('missing')).rejects.toThrow(NotFoundError);
        });
    });
});
