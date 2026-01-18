import { z } from 'zod';

/**
 * Category Query Schema (Pagination, Search, Sort)
 */
export const categoryQuerySchema = z.object({
    query: z.object({
        page: z.preprocess((val) => Number(val), z.number().int().min(1)).optional(),
        limit: z.preprocess((val) => Number(val), z.number().int().min(1).max(100)).optional(),
        search: z.string().optional(),
        sortBy: z.enum(['name', 'order_index', 'created_at']).optional(),
        sortOrder: z.enum(['asc', 'desc']).optional(),
        includeDeleted: z.preprocess((val) => val === 'true', z.boolean()).optional(),
    }),
});

/**
 * Category Creation Schema
 */
export const createCategorySchema = z.object({
    body: z.object({
        name: z.string().min(2).max(50),
        slug: z
            .string()
            .min(2)
            .max(50)
            .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase and only contain letters, numbers, and hyphens')
            .optional(),
        description: z.string().max(255).optional(),
        order_index: z.number().int().min(0).optional(),
    }),
});

/**
 * Category Update Schema
 */
export const updateCategorySchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    }),
    body: z.object({
        name: z.string().min(2).max(50).optional(),
        slug: z
            .string()
            .min(2)
            .max(50)
            .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase and only contain letters, numbers, and hyphens')
            .optional(),
        description: z.string().max(255).optional().nullable(),
        order_index: z.number().int().min(0).optional(),
    }),
});

export type CreateCategoryRequest = z.infer<typeof createCategorySchema>['body'];
export type UpdateCategoryRequest = z.infer<typeof updateCategorySchema>['body'];
export type CategoryQuery = z.infer<typeof categoryQuerySchema>['query'];
