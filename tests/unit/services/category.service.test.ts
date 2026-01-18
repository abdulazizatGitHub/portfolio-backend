import * as categoryService from '../../../src/core/services/category.service';
import * as categoryRepository from '../../../src/data/repositories/category.repository';
import { NotFoundError } from '../../../src/core/exceptions/app-errors';
import { Category } from '../../../src/data/prisma.client';

jest.mock('../../../src/data/repositories/category.repository');

describe('Category Service', () => {
    const mockCategory: Category = {
        id: 'cat-123',
        name: 'Web Development',
        slug: 'web-dev',
        description: 'Web development projects',
        order_index: 0,
        deleted_at: null,
        created_at: new Date(),
        updated_at: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllCategories', () => {
        it('should return all categories', async () => {
            (categoryRepository.findAll as jest.Mock).mockResolvedValue([mockCategory]);
            const categories = await categoryService.getAllCategories();
            expect(categories).toHaveLength(1);
            expect(categories[0]).toEqual(mockCategory);
        });
    });

    describe('getCategoryById', () => {
        it('should return a category by ID', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(mockCategory);
            const category = await categoryService.getCategoryById('cat-123');
            expect(category).toEqual(mockCategory);
        });

        it('should throw NotFoundError if category does not exist', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(categoryService.getCategoryById('invalid')).rejects.toThrow(NotFoundError);
        });
    });

    describe('createCategory', () => {
        it('should create a new category', async () => {
            const createData = { name: 'New', slug: 'new' };
            (categoryRepository.create as jest.Mock).mockResolvedValue({ ...mockCategory, ...createData });
            const category = await categoryService.createCategory(createData);
            expect(category.name).toBe(createData.name);
            expect(categoryRepository.create).toHaveBeenCalledWith(createData);
        });
    });

    describe('updateCategory', () => {
        it('should update an existing category', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(mockCategory);
            (categoryRepository.update as jest.Mock).mockResolvedValue({ ...mockCategory, name: 'Updated' });

            const category = await categoryService.updateCategory('cat-123', { name: 'Updated' });
            expect(category.name).toBe('Updated');
        });
    });

    describe('deleteCategory', () => {
        it('should soft delete a category', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(mockCategory);
            (categoryRepository.softDelete as jest.Mock).mockResolvedValue({ ...mockCategory, deleted_at: new Date() });

            const category = await categoryService.deleteCategory('cat-123');
            expect(category.deleted_at).not.toBeNull();
        });
    });
});
