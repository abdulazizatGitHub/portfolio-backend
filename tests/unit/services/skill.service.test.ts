import * as skillService from '../../../src/core/services/skill.service';
import * as skillRepository from '../../../src/data/repositories/skill.repository';
import { NotFoundError, ConflictError } from '../../../src/core/exceptions/app-errors';
import { Skill } from '../../../src/data/prisma.client';

jest.mock('../../../src/data/repositories/skill.repository');

describe('Skill Service', () => {
    const mockSkill: Skill = {
        id: 'skill-123',
        name: 'TypeScript',
        slug: 'typescript',
        category: 'Backend',
        icon_url: 'https://example.com/icon.png',
        created_at: new Date(),
        updated_at: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllSkills', () => {
        it('should return skills and total count', async () => {
            (skillRepository.findAll as jest.Mock).mockResolvedValue([mockSkill]);
            (skillRepository.count as jest.Mock).mockResolvedValue(1);

            const result = await skillService.getAllSkills({ page: 1, limit: 10 });

            expect(result.skills).toEqual([mockSkill]);
            expect(result.total).toBe(1);
            expect(skillRepository.findAll).toHaveBeenCalledWith(expect.objectContaining({ skip: 0, take: 10 }));
        });
    });

    describe('getSkillById', () => {
        it('should return a skill by ID', async () => {
            (skillRepository.findById as jest.Mock).mockResolvedValue(mockSkill);
            const skill = await skillService.getSkillById('skill-123');
            expect(skill).toEqual(mockSkill);
        });

        it('should throw NotFoundError if skill does not exist', async () => {
            (skillRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(skillService.getSkillById('invalid')).rejects.toThrow(NotFoundError);
        });
    });

    describe('getSkillBySlug', () => {
        it('should return a skill by slug', async () => {
            (skillRepository.findBySlug as jest.Mock).mockResolvedValue(mockSkill);
            const skill = await skillService.getSkillBySlug('typescript');
            expect(skill).toEqual(mockSkill);
        });
    });

    describe('createSkill', () => {
        it('should create a new skill with provided slug', async () => {
            const createData = { name: 'Node.js', slug: 'nodejs' };
            (skillRepository.findByName as jest.Mock).mockResolvedValue(null);
            (skillRepository.findBySlug as jest.Mock).mockResolvedValue(null);
            (skillRepository.create as jest.Mock).mockResolvedValue({ ...mockSkill, ...createData });

            const skill = await skillService.createSkill(createData);
            expect(skill.slug).toBe('nodejs');
            expect(skillRepository.create).toHaveBeenCalledWith(expect.objectContaining({ slug: 'nodejs' }));
        });

        it('should auto-generate slug from name if not provided', async () => {
            const createData = { name: 'Auto Skill' };
            (skillRepository.findByName as jest.Mock).mockResolvedValue(null);
            (skillRepository.findBySlug as jest.Mock).mockResolvedValue(null);
            (skillRepository.create as jest.Mock).mockResolvedValue({ ...mockSkill, name: 'Auto Skill', slug: 'auto-skill' });

            const skill = await skillService.createSkill(createData);
            expect(skill.slug).toBe('auto-skill');
        });

        it('should throw ConflictError if name or slug already exists', async () => {
            (skillRepository.findByName as jest.Mock).mockResolvedValue(mockSkill);
            await expect(skillService.createSkill({ name: 'TypeScript' })).rejects.toThrow(ConflictError);
        });
    });

    describe('deleteSkill', () => {
        it('should delete a skill', async () => {
            (skillRepository.findById as jest.Mock).mockResolvedValue(mockSkill);
            (skillRepository.deleteById as jest.Mock).mockResolvedValue(mockSkill);

            const skill = await skillService.deleteSkill('skill-123');
            expect(skill).toEqual(mockSkill);
            expect(skillRepository.deleteById).toHaveBeenCalledWith('skill-123');
        });
    });
});
