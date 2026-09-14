import { z } from 'zod';

export const projectStatusEnum = z.enum(['LIVE', 'DRAFT', 'DEVELOPMENT', 'ARCHIVED']);

/**
 * Project Query Schema (Pagination, Search, Filter)
 */
export const projectQuerySchema = z.object({
    query: z.object({
        page: z.preprocess((val) => Number(val), z.number().int().min(1)).optional(),
        limit: z.preprocess((val) => Number(val), z.number().int().min(1).max(100)).optional(),
        search: z.string().optional(),
        sortBy: z.enum(['title', 'order_index', 'created_at']).optional(),
        sortOrder: z.enum(['asc', 'desc']).optional(),
        category_id: z.string().uuid().optional(),
        status: projectStatusEnum.optional(),
        is_published: z.preprocess((val) => val === 'true', z.boolean()).optional(),
        featured: z.preprocess((val) => val === 'true', z.boolean()).optional(),
        includeDeleted: z.preprocess((val) => val === 'true', z.boolean()).optional(),
    }),
});

/**
 * Project Creation Schema
 */
export const createProjectSchema = z.object({
    body: z.object({
        title: z.string().min(2).max(100),
        short_description: z.string().min(10).max(200),
        description: z.string().min(10).max(5000),
        thumbnail_url: z.string().max(500).optional().nullable(),
        status: projectStatusEnum.optional(),
        start_date: z.coerce.date().optional().nullable(),
        end_date: z.coerce.date().optional().nullable(),
        demo_url: z.string().url().max(255).optional().nullable(),
        repo_url: z.string().url().max(255).optional().nullable(),
        featured: z.boolean().optional(),
        is_published: z.boolean().optional(),
        order_index: z.number().int().min(0).optional(),
        category_id: z.string().uuid(),
        skill_ids: z.array(z.string().uuid()).optional(),
    }),
});

/**
 * Project Update Schema
 */
export const updateProjectSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    }),
    body: z.object({
        title: z.string().min(2).max(100).optional(),
        short_description: z.string().min(10).max(200).optional(),
        description: z.string().min(10).max(5000).optional(),
        thumbnail_url: z.string().max(500).optional().nullable(),
        status: projectStatusEnum.optional(),
        start_date: z.coerce.date().optional().nullable(),
        end_date: z.coerce.date().optional().nullable(),
        demo_url: z.string().url().max(255).optional().nullable(),
        repo_url: z.string().url().max(255).optional().nullable(),
        featured: z.boolean().optional(),
        is_published: z.boolean().optional(),
        order_index: z.number().int().min(0).optional(),
        category_id: z.string().uuid().optional(),
        skill_ids: z.array(z.string().uuid()).optional(),
    }),
});

export type CreateProjectRequest = z.infer<typeof createProjectSchema>['body'];
export type UpdateProjectRequest = z.infer<typeof updateProjectSchema>['body'];
export type ProjectQuery = z.infer<typeof projectQuerySchema>['query'];
