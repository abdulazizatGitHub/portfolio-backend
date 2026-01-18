import { PrismaClient } from '../../src/data/prisma.client';

const prisma = new PrismaClient();

describe('Database Integration Tests', () => {
    afterAll(async () => {
        await prisma.$disconnect();
    });

    describe('Schema Validation', () => {
        it('should connect to database successfully', async () => {
            const result = await prisma.$queryRaw`SELECT 1`;
            expect(result).toBeDefined();
        });

        it('should have all expected models', () => {
            expect(prisma.user).toBeDefined();
            expect(prisma.category).toBeDefined();
            expect(prisma.skill).toBeDefined();
            expect(prisma.project).toBeDefined();
            expect(prisma.image).toBeDefined();
            expect(prisma.projectSkill).toBeDefined();
        });
    });

    describe('Relationships', () => {
        beforeAll(async () => {
            // Clean up
            await prisma.projectSkill.deleteMany();
            await prisma.image.deleteMany();
            await prisma.project.deleteMany();
            await prisma.skill.deleteMany();
            await prisma.category.deleteMany();
        });

        it('should create project with category relationship', async () => {
            const category = await prisma.category.create({
                data: {
                    name: 'Test Category',
                    slug: 'test-category',
                    order_index: 1,
                },
            });

            const project = await prisma.project.create({
                data: {
                    title: 'Test Project',
                    description: 'Test description',
                    order_index: 1,
                    category_id: category.id,
                },
                include: {
                    category: true,
                },
            });

            expect(project.category.id).toBe(category.id);
            expect(project.category.name).toBe('Test Category');
        });

        it('should create many-to-many project-skill relationship', async () => {
            const category = await prisma.category.create({
                data: {
                    name: 'Web Dev',
                    slug: 'web-dev',
                    order_index: 1,
                },
            });

            const skill1 = await prisma.skill.create({
                data: {
                    name: 'React',
                    slug: 'react',
                    category: 'Frontend',
                },
            });

            const skill2 = await prisma.skill.create({
                data: {
                    name: 'Node.js',
                    slug: 'nodejs',
                    category: 'Backend',
                },
            });

            const project = await prisma.project.create({
                data: {
                    title: 'Full Stack App',
                    description: 'Test',
                    order_index: 1,
                    category_id: category.id,
                },
            });

            await prisma.projectSkill.create({
                data: {
                    project_id: project.id,
                    skill_id: skill1.id,
                },
            });

            await prisma.projectSkill.create({
                data: {
                    project_id: project.id,
                    skill_id: skill2.id,
                },
            });

            const projectWithSkills = await prisma.project.findUnique({
                where: { id: project.id },
                include: {
                    project_skills: {
                        include: {
                            skill: true,
                        },
                    },
                },
            });

            expect(projectWithSkills?.project_skills).toHaveLength(2);
            expect(
                projectWithSkills?.project_skills.map((ps) => ps.skill.name)
            ).toContain('React');
            expect(
                projectWithSkills?.project_skills.map((ps) => ps.skill.name)
            ).toContain('Node.js');
        });

        it('should cascade delete project when category is deleted', async () => {
            const category = await prisma.category.create({
                data: {
                    name: 'Temp Category',
                    slug: 'temp-category',
                    order_index: 1,
                },
            });

            const project = await prisma.project.create({
                data: {
                    title: 'Temp Project',
                    description: 'Test',
                    order_index: 1,
                    category_id: category.id,
                },
            });

            await prisma.category.delete({
                where: { id: category.id },
            });

            const foundProject = await prisma.project.findUnique({
                where: { id: project.id },
            });

            expect(foundProject).toBeNull();
        });
    });

    describe('Unique Constraints', () => {
        beforeAll(async () => {
            await prisma.user.deleteMany();
            await prisma.category.deleteMany();
            await prisma.skill.deleteMany();
        });

        it('should enforce unique email for users', async () => {
            await prisma.user.create({
                data: {
                    email: 'unique@example.com',
                    password: 'hash',
                    name: 'Test User',
                    role: 'VIEWER',
                },
            });

            await expect(
                prisma.user.create({
                    data: {
                        email: 'unique@example.com',
                        password: 'hash2',
                        name: 'Test User 2',
                        role: 'ADMIN',
                    },
                })
            ).rejects.toThrow();
        });

        it('should enforce unique slug for categories', async () => {
            await prisma.category.create({
                data: {
                    name: 'Category 1',
                    slug: 'unique-slug',
                    order_index: 1,
                },
            });

            await expect(
                prisma.category.create({
                    data: {
                        name: 'Category 2',
                        slug: 'unique-slug',
                        order_index: 2,
                    },
                })
            ).rejects.toThrow();
        });

        it('should enforce unique slug for skills', async () => {
            await prisma.skill.create({
                data: {
                    name: 'Skill 1',
                    slug: 'unique-skill-slug',
                    category: 'Frontend',
                },
            });

            await expect(
                prisma.skill.create({
                    data: {
                        name: 'Skill 2',
                        slug: 'unique-skill-slug',
                        category: 'Backend',
                    },
                })
            ).rejects.toThrow();
        });
    });

    describe('Soft Delete', () => {
        it('should support soft delete for projects', async () => {
            const category = await prisma.category.create({
                data: {
                    name: 'SD Category',
                    slug: 'sd-category',
                    order_index: 1,
                },
            });

            const project = await prisma.project.create({
                data: {
                    title: 'Soft Delete Test',
                    description: 'Test',
                    order_index: 1,
                    category_id: category.id,
                },
            });

            const softDeleted = await prisma.project.update({
                where: { id: project.id },
                data: { deleted_at: new Date() },
            });

            expect(softDeleted.deleted_at).not.toBeNull();

            // Should still exist in database
            const stillExists = await prisma.project.findUnique({
                where: { id: project.id },
            });

            expect(stillExists).not.toBeNull();
            expect(stillExists?.deleted_at).not.toBeNull();
        });

        it('should support soft delete for categories', async () => {
            const category = await prisma.category.create({
                data: {
                    name: 'SD Cat 2',
                    slug: 'sd-cat-2',
                    order_index: 1,
                },
            });

            const softDeleted = await prisma.category.update({
                where: { id: category.id },
                data: { deleted_at: new Date() },
            });

            expect(softDeleted.deleted_at).not.toBeNull();
        });
    });
});

