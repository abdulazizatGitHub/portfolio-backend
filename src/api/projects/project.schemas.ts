import { z } from 'zod';

/**
 * Project Creation Schema
 */
export const createProjectSchema = z.object({
    body: z.object({
        title: z.string().min(2).max(100),
        description: z.string().min(10).max(500),
        long_description: z.string().min(10).optional(),
        demo_url: z.string().url().optional().nullable(),
        repo_url: z.string().url().optional().nullable(),
        is_published: z.boolean().default(false),
        featured: z.boolean().default(false),
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
        description: z.string().min(10).max(500).optional(),
        long_description: z.string().min(10).optional(),
        demo_url: z.string().url().optional().nullable(),
        repo_url: z.string().url().optional().nullable(),
        is_published: z.boolean().optional(),
        featured: z.boolean().optional(),
        order_index: z.number().int().min(0).optional(),
        category_id: z.string().uuid().optional(),
        skill_ids: z.array(z.string().uuid()).optional(),
    }),
});

/**
 * Project Query Schema
 */
export const projectQuerySchema = z.object({
    query: z.object({
        is_published: z.preprocess((val) => val === 'true', z.boolean()).optional(),
        featured: z.preprocess((val) => val === 'true', z.boolean()).optional(),
        category_id: z.string().uuid().optional(),
    }),
});

export type CreateProjectRequest = z.infer<typeof createProjectSchema>['body'];
export type UpdateProjectRequest = z.infer<typeof updateProjectSchema>['body'];
