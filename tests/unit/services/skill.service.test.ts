import * as skillService from '../../../src/core/services/skill.service';
import * as skillRepository from '../../../src/data/repositories/skill.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';
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
        it('should return all skills', async () => {
            (skillRepository.findAll as jest.Mock).mockResolvedValue([mockSkill]);
            const skills = await skillService.getAllSkills();
            expect(skills).toHaveLength(1);
            expect(skills[0]).toEqual(mockSkill);
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

    describe('createSkill', () => {
        it('should create a new skill', async () => {
            const createData = { name: 'Node.js', slug: 'nodejs' };
            (skillRepository.create as jest.Mock).mockResolvedValue({ ...mockSkill, ...createData });
            const skill = await skillService.createSkill(createData);
            expect(skill.name).toBe(createData.name);
            expect(skillRepository.create).toHaveBeenCalledWith(createData);
        });
    });

    describe('updateSkill', () => {
        it('should update an existing skill', async () => {
            (skillRepository.findById as jest.Mock).mockResolvedValue(mockSkill);
            (skillRepository.update as jest.Mock).mockResolvedValue({ ...mockSkill, name: 'Updated' });

            const skill = await skillService.updateSkill('skill-123', { name: 'Updated' });
            expect(skill.name).toBe('Updated');
        });
    });

    describe('deleteSkill', () => {
        it('should delete a skill', async () => {
            (skillRepository.findById as jest.Mock).mockResolvedValue(mockSkill);
            (skillRepository.deleteSkill as jest.Mock).mockResolvedValue(mockSkill);

            const skill = await skillService.deleteSkill('skill-123');
            expect(skill).toEqual(mockSkill);
            expect(skillRepository.deleteSkill).toHaveBeenCalledWith('skill-123');
        });
    });
});
