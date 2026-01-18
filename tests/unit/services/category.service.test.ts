import * as categoryService from '../../../src/core/services/category.service';
import * as categoryRepository from '../../../src/data/repositories/category.repository';
import { NotFoundError, ConflictError } from '../../../src/core/exceptions/app-errors';
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
        it('should return categories and total count', async () => {
            (categoryRepository.findAll as jest.Mock).mockResolvedValue([mockCategory]);
            (categoryRepository.count as jest.Mock).mockResolvedValue(1);

            const result = await categoryService.getAllCategories({ page: 1, limit: 10 });

            expect(result.categories).toEqual([mockCategory]);
            expect(result.total).toBe(1);
            expect(categoryRepository.findAll).toHaveBeenCalledWith(expect.objectContaining({ skip: 0, take: 10 }));
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

    describe('getCategoryBySlug', () => {
        it('should return a category by slug', async () => {
            (categoryRepository.findBySlug as jest.Mock).mockResolvedValue(mockCategory);
            const category = await categoryService.getCategoryBySlug('web-dev');
            expect(category).toEqual(mockCategory);
        });
    });

    describe('createCategory', () => {
        it('should create a new category with provided slug', async () => {
            const createData = { name: 'New', slug: 'provided-slug' };
            (categoryRepository.findBySlug as jest.Mock).mockResolvedValue(null);
            (categoryRepository.create as jest.Mock).mockResolvedValue({ ...mockCategory, ...createData });

            const category = await categoryService.createCategory(createData);
            expect(category.slug).toBe('provided-slug');
            expect(categoryRepository.create).toHaveBeenCalledWith(expect.objectContaining({ slug: 'provided-slug' }));
        });

        it('should auto-generate slug from name if not provided', async () => {
            const createData = { name: 'Auto Generated' };
            (categoryRepository.findBySlug as jest.Mock).mockResolvedValue(null);
            (categoryRepository.create as jest.Mock).mockResolvedValue({ ...mockCategory, name: 'Auto Generated', slug: 'auto-generated' });

            const category = await categoryService.createCategory(createData);
            expect(category.slug).toBe('auto-generated');
            expect(categoryRepository.create).toHaveBeenCalledWith(expect.objectContaining({ slug: 'auto-generated' }));
        });

        it('should throw ConflictError if slug already exists', async () => {
            (categoryRepository.findBySlug as jest.Mock).mockResolvedValue(mockCategory);
            await expect(categoryService.createCategory({ name: 'Web Development' })).rejects.toThrow(ConflictError);
        });
    });

    describe('restoreCategory', () => {
        it('should restore a soft-deleted category', async () => {
            const deletedCategory = { ...mockCategory, deleted_at: new Date() };
            (categoryRepository.findById as jest.Mock).mockResolvedValue(deletedCategory);
            (categoryRepository.restore as jest.Mock).mockResolvedValue(mockCategory);

            const result = await categoryService.restoreCategory('cat-123');
            expect(result.deleted_at).toBeNull();
            expect(categoryRepository.restore).toHaveBeenCalledWith('cat-123');
        });

        it('should return category directly if not deleted', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(mockCategory);
            const result = await categoryService.restoreCategory('cat-123');
            expect(result).toEqual(mockCategory);
            expect(categoryRepository.restore).not.toHaveBeenCalled();
        });
    });

    describe('deleteCategory', () => {
        it('should soft delete a category', async () => {
            (categoryRepository.findById as jest.Mock).mockResolvedValue(mockCategory);
            (categoryRepository.softDelete as jest.Mock).mockResolvedValue({ ...mockCategory, deleted_at: new Date() });

            const category = await categoryService.deleteCategory('cat-123');
            expect(category.deleted_at).not.toBeNull();
            expect(categoryRepository.softDelete).toHaveBeenCalledWith('cat-123');
        });
    });
});
