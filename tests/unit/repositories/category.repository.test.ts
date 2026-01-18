import { PrismaClient } from '@prisma/client';
import * as CategoryRepository from '../../../src/data/repositories/category.repository';

const prisma = new PrismaClient();

describe('Category Repository', () => {
    beforeAll(async () => {
        await prisma.category.deleteMany();
    });

    afterAll(async () => {
        await prisma.category.deleteMany();
        await prisma.$disconnect();
    });

    describe('create', () => {
        it('should create a new category', async () => {
            const categoryData = {
                name: 'Web Development',
                slug: 'web-development',
                description: 'Full-stack web applications',
                order_index: 1,
            };

            const category = await CategoryRepository.create(categoryData);

            expect(category).toHaveProperty('id');
            expect(category.name).toBe(categoryData.name);
            expect(category.slug).toBe(categoryData.slug);
            expect(category.order_index).toBe(categoryData.order_index);
            expect(category.deleted_at).toBeNull();
        });
    });

    describe('findAll', () => {
        it('should return all non-deleted categories ordered by order_index', async () => {
            await prisma.category.deleteMany();

            await CategoryRepository.create({
                name: 'Category A',
                slug: 'category-a',
                order_index: 2,
            });

            await CategoryRepository.create({
                name: 'Category B',
                slug: 'category-b',
                order_index: 1,
            });

            // Create a soft-deleted category
            const deleted = await CategoryRepository.create({
                name: 'Deleted Category',
                slug: 'deleted-category',
                order_index: 0,
            });
            await CategoryRepository.softDelete(deleted.id);

            const categories = await CategoryRepository.findAll();

            expect(categories).toHaveLength(2);
            expect(categories[0].slug).toBe('category-b'); // order_index 1
            expect(categories[1].slug).toBe('category-a'); // order_index 2
        });
    });

    describe('findBySlug', () => {
        it('should find category by slug', async () => {
            const categoryData = {
                name: 'Mobile Apps',
                slug: 'mobile-apps',
                order_index: 1,
            };

            await CategoryRepository.create(categoryData);

            const category = await CategoryRepository.findBySlug('mobile-apps');

            expect(category).not.toBeNull();
            expect(category?.name).toBe(categoryData.name);
        });

        it('should return null for non-existent slug', async () => {
            const category = await CategoryRepository.findBySlug('non-existent-slug');

            expect(category).toBeNull();
        });

        it('should return null for soft-deleted category', async () => {
            const category = await CategoryRepository.create({
                name: 'To Delete',
                slug: 'to-delete',
                order_index: 1,
            });

            await CategoryRepository.softDelete(category.id);

            const found = await CategoryRepository.findBySlug('to-delete');

            expect(found).toBeNull();
        });
    });

    describe('findById', () => {
        it('should find category by ID', async () => {
            const category = await CategoryRepository.create({
                name: 'Design',
                slug: 'design',
                order_index: 1,
            });

            const found = await CategoryRepository.findById(category.id);

            expect(found).not.toBeNull();
            expect(found?.id).toBe(category.id);
        });

        it('should return null for soft-deleted category', async () => {
            const category = await CategoryRepository.create({
                name: 'Soft Deleted',
                slug: 'soft-deleted',
                order_index: 1,
            });

            await CategoryRepository.softDelete(category.id);

            const found = await CategoryRepository.findById(category.id);

            expect(found).toBeNull();
        });
    });

    describe('update', () => {
        it('should update category fields', async () => {
            const category = await CategoryRepository.create({
                name: 'Original Name',
                slug: 'original-slug',
                order_index: 1,
            });

            const updated = await CategoryRepository.update(category.id, {
                name: 'Updated Name',
                description: 'Updated description',
                order_index: 5,
            });

            expect(updated.name).toBe('Updated Name');
            expect(updated.description).toBe('Updated description');
            expect(updated.order_index).toBe(5);
        });
    });

    describe('softDelete', () => {
        it('should soft delete category', async () => {
            const category = await CategoryRepository.create({
                name: 'To Soft Delete',
                slug: 'to-soft-delete',
                order_index: 1,
            });

            const deleted = await CategoryRepository.softDelete(category.id);

            expect(deleted.deleted_at).not.toBeNull();

            const found = await CategoryRepository.findById(category.id);
            expect(found).toBeNull();
        });
    });
});

