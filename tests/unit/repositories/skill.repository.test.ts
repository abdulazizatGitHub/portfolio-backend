import { PrismaClient } from '@prisma/client';
import * as SkillRepository from '../../../src/data/repositories/skill.repository';

const prisma = new PrismaClient();

describe('Skill Repository', () => {
    beforeAll(async () => {
        await prisma.skill.deleteMany();
    });

    afterAll(async () => {
        await prisma.skill.deleteMany();
        await prisma.$disconnect();
    });

    describe('create', () => {
        it('should create a new skill', async () => {
            const skillData = {
                name: 'React',
                slug: 'react',
                category: 'Frontend',
                icon_url: 'https://example.com/react.svg',
            };

            const skill = await SkillRepository.create(skillData);

            expect(skill).toHaveProperty('id');
            expect(skill.name).toBe(skillData.name);
            expect(skill.slug).toBe(skillData.slug);
            expect(skill.category).toBe(skillData.category);
        });
    });

    describe('findAll', () => {
        it('should return all skills ordered by name', async () => {
            await prisma.skill.deleteMany();

            await SkillRepository.create({
                name: 'TypeScript',
                slug: 'typescript',
                category: 'Frontend',
            });

            await SkillRepository.create({
                name: 'Node.js',
                slug: 'nodejs',
                category: 'Backend',
            });

            await SkillRepository.create({
                name: 'Docker',
                slug: 'docker',
                category: 'DevOps',
            });

            const skills = await SkillRepository.findAll();

            expect(skills).toHaveLength(3);
            expect(skills[0].name).toBe('Docker'); // Alphabetically first
            expect(skills[1].name).toBe('Node.js');
            expect(skills[2].name).toBe('TypeScript');
        });
    });

    describe('findBySlug', () => {
        it('should find skill by slug', async () => {
            const skillData = {
                name: 'PostgreSQL',
                slug: 'postgresql',
                category: 'Backend',
            };

            await SkillRepository.create(skillData);

            const skill = await SkillRepository.findBySlug('postgresql');

            expect(skill).not.toBeNull();
            expect(skill?.name).toBe(skillData.name);
        });

        it('should return null for non-existent slug', async () => {
            const skill = await SkillRepository.findBySlug('non-existent-slug');

            expect(skill).toBeNull();
        });
    });

    describe('findById', () => {
        it('should find skill by ID', async () => {
            const skill = await SkillRepository.create({
                name: 'Express',
                slug: 'express',
                category: 'Backend',
            });

            const found = await SkillRepository.findById(skill.id);

            expect(found).not.toBeNull();
            expect(found?.id).toBe(skill.id);
        });
    });

    describe('findByCategory', () => {
        it('should find skills by category', async () => {
            await prisma.skill.deleteMany();

            await SkillRepository.create({
                name: 'React',
                slug: 'react',
                category: 'Frontend',
            });

            await SkillRepository.create({
                name: 'Vue',
                slug: 'vue',
                category: 'Frontend',
            });

            await SkillRepository.create({
                name: 'Python',
                slug: 'python',
                category: 'Backend',
            });

            const frontendSkills = await SkillRepository.findByCategory('Frontend');

            expect(frontendSkills).toHaveLength(2);
            expect(frontendSkills.every((s) => s.category === 'Frontend')).toBe(true);
        });
    });

    describe('update', () => {
        it('should update skill fields', async () => {
            const skill = await SkillRepository.create({
                name: 'Original Skill',
                slug: 'original-skill',
                category: 'Frontend',
            });

            const updated = await SkillRepository.update(skill.id, {
                name: 'Updated Skill',
                category: 'Backend',
                icon_url: 'https://example.com/updated.svg',
            });

            expect(updated.name).toBe('Updated Skill');
            expect(updated.category).toBe('Backend');
            expect(updated.icon_url).toBe('https://example.com/updated.svg');
        });
    });

    describe('delete', () => {
        it('should delete skill by ID', async () => {
            const skill = await SkillRepository.create({
                name: 'To Delete',
                slug: 'to-delete',
                category: 'Frontend',
            });

            const deleted = await SkillRepository.deleteSkill(skill.id);

            expect(deleted.id).toBe(skill.id);

            const found = await SkillRepository.findById(skill.id);
            expect(found).toBeNull();
        });
    });
});

