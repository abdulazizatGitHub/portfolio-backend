import { PrismaClient } from '@prisma/client';
import * as ProjectRepository from '../../../src/data/repositories/project.repository';
import * as CategoryRepository from '../../../src/data/repositories/category.repository';
import * as SkillRepository from '../../../src/data/repositories/skill.repository';

const prisma = new PrismaClient();

describe('Project Repository', () => {
    let testCategory: Awaited<ReturnType<typeof CategoryRepository.create>>;
    let testSkill1: Awaited<ReturnType<typeof SkillRepository.create>>;
    let testSkill2: Awaited<ReturnType<typeof SkillRepository.create>>;

    beforeAll(async () => {
        // Clean up
        await prisma.projectSkill.deleteMany();
        await prisma.image.deleteMany();
        await prisma.project.deleteMany();
        await prisma.skill.deleteMany();
        await prisma.category.deleteMany();

        // Create test data
        testCategory = await CategoryRepository.create({
            name: 'Test Category',
            slug: 'test-category',
            order_index: 1,
        });

        testSkill1 = await SkillRepository.create({
            name: 'React',
            slug: 'react',
            category: 'Frontend',
        });

        testSkill2 = await SkillRepository.create({
            name: 'Node.js',
            slug: 'nodejs',
            category: 'Backend',
        });
    });

    afterAll(async () => {
        await prisma.projectSkill.deleteMany();
        await prisma.image.deleteMany();
        await prisma.project.deleteMany();
        await prisma.skill.deleteMany();
        await prisma.category.deleteMany();
        await prisma.$disconnect();
    });

    describe('create', () => {
        it('should create a new project', async () => {
            const projectData = {
                title: 'Test Project',
                description: 'A test project',
                long_description: 'Long description of the test project',
                demo_url: 'https://demo.example.com',
                repo_url: 'https://github.com/example/test',
                featured: true,
                is_published: true,
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            };

            const project = await ProjectRepository.create(projectData);

            expect(project).toHaveProperty('id');
            expect(project.title).toBe(projectData.title);
            expect(project.category_id).toBe(testCategory.id);
            expect(project.deleted_at).toBeNull();
        });
    });

    describe('findById', () => {
        it('should find project by ID with relations', async () => {
            const project = await ProjectRepository.create({
                title: 'Project with Relations',
                description: 'Test description',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            // Add skills
            await ProjectRepository.addSkill(project.id, testSkill1.id);
            await ProjectRepository.addSkill(project.id, testSkill2.id);

            // Add images
            await prisma.image.create({
                data: {
                    project_id: project.id,
                    url: 'https://example.com/image.jpg',
                    alt_text: 'Test image',
                    is_thumbnail: true,
                    order_index: 1,
                },
            });

            const found = await ProjectRepository.findById(project.id);

            expect(found).not.toBeNull();
            expect(found?.id).toBe(project.id);
            expect(found?.category).toBeDefined();
            expect(found?.category.slug).toBe(testCategory.slug);
            expect(found?.images).toHaveLength(1);
            expect(found?.project_skills).toHaveLength(2);
        });

        it('should return null for soft-deleted project', async () => {
            const project = await ProjectRepository.create({
                title: 'To Soft Delete',
                description: 'Test',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.softDelete(project.id);

            const found = await ProjectRepository.findById(project.id);

            expect(found).toBeNull();
        });
    });

    describe('findAll', () => {
        beforeEach(async () => {
            await prisma.projectSkill.deleteMany();
            await prisma.image.deleteMany();
            await prisma.project.deleteMany();
        });

        it('should return all non-deleted projects ordered by order_index', async () => {
            await ProjectRepository.create({
                title: 'Project A',
                description: 'Test',
                order_index: 2,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.create({
                title: 'Project B',
                description: 'Test',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const projects = await ProjectRepository.findAll();

            expect(projects).toHaveLength(2);
            expect(projects[0].title).toBe('Project B'); // order_index 1
            expect(projects[1].title).toBe('Project A'); // order_index 2
        });

        it('should filter by is_published', async () => {
            await ProjectRepository.create({
                title: 'Published Project',
                description: 'Test',
                is_published: true,
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.create({
                title: 'Draft Project',
                description: 'Test',
                is_published: false,
                order_index: 2,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const published = await ProjectRepository.findAll({ is_published: true });

            expect(published).toHaveLength(1);
            expect(published[0].title).toBe('Published Project');
        });

        it('should filter by featured', async () => {
            await ProjectRepository.create({
                title: 'Featured Project',
                description: 'Test',
                featured: true,
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.create({
                title: 'Normal Project',
                description: 'Test',
                featured: false,
                order_index: 2,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const featured = await ProjectRepository.findAll({ featured: true });

            expect(featured).toHaveLength(1);
            expect(featured[0].title).toBe('Featured Project');
        });
    });

    describe('findPublished', () => {
        it('should return only published projects', async () => {
            await prisma.project.deleteMany();

            await ProjectRepository.create({
                title: 'Published 1',
                description: 'Test',
                is_published: true,
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.create({
                title: 'Draft',
                description: 'Test',
                is_published: false,
                order_index: 2,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const published = await ProjectRepository.findPublished();

            expect(published).toHaveLength(1);
            expect(published.every((p) => p.is_published)).toBe(true);
        });
    });

    describe('findFeatured', () => {
        it('should return only featured and published projects', async () => {
            await prisma.project.deleteMany();

            await ProjectRepository.create({
                title: 'Featured & Published',
                description: 'Test',
                featured: true,
                is_published: true,
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.create({
                title: 'Featured but Draft',
                description: 'Test',
                featured: true,
                is_published: false,
                order_index: 2,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const featured = await ProjectRepository.findFeatured();

            expect(featured).toHaveLength(1);
            expect(featured[0].title).toBe('Featured & Published');
        });
    });

    describe('addSkill and removeSkill', () => {
        it('should add skill to project', async () => {
            const project = await ProjectRepository.create({
                title: 'Project for Skills',
                description: 'Test',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.addSkill(project.id, testSkill1.id);

            const found = await ProjectRepository.findById(project.id);

            expect(found?.project_skills).toHaveLength(1);
            expect(found?.project_skills[0].skill.name).toBe('React');
        });

        it('should remove skill from project', async () => {
            const project = await ProjectRepository.create({
                title: 'Project to Remove Skill',
                description: 'Test',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            await ProjectRepository.addSkill(project.id, testSkill1.id);
            await ProjectRepository.removeSkill(project.id, testSkill1.id);

            const found = await ProjectRepository.findById(project.id);

            expect(found?.project_skills).toHaveLength(0);
        });
    });

    describe('update', () => {
        it('should update project fields', async () => {
            const project = await ProjectRepository.create({
                title: 'Original Title',
                description: 'Original description',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const updated = await ProjectRepository.update(project.id, {
                title: 'Updated Title',
                featured: true,
                is_published: true,
            });

            expect(updated.title).toBe('Updated Title');
            expect(updated.featured).toBe(true);
            expect(updated.is_published).toBe(true);
        });
    });

    describe('softDelete', () => {
        it('should soft delete project', async () => {
            const project = await ProjectRepository.create({
                title: 'To Delete',
                description: 'Test',
                order_index: 1,
                category: {
                    connect: { id: testCategory.id },
                },
            });

            const deleted = await ProjectRepository.softDelete(project.id);

            expect(deleted.deleted_at).not.toBeNull();

            const found = await ProjectRepository.findById(project.id);
            expect(found).toBeNull();
        });
    });
});

