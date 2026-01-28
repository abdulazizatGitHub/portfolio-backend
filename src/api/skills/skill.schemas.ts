import { z } from 'zod';

/**
 * Skill Query Schema (Pagination, Search, Sort)
 */
export const skillQuerySchema = z.object({
    query: z.object({
        page: z.preprocess((val) => Number(val), z.number().int().min(1)).optional(),
        limit: z.preprocess((val) => Number(val), z.number().int().min(1).max(100)).optional(),
        search: z.string().optional(),
        sortBy: z.enum(['name', 'created_at']).optional(),
        sortOrder: z.enum(['asc', 'desc']).optional(),
        category: z.string().optional(),
    }),
});

/**
 * Skill Creation Schema
 */
export const createSkillSchema = z.object({
    body: z.object({
        name: z.string().min(2).max(50),
        slug: z
            .string()
            .min(2)
            .max(50)
            .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase and only contain letters, numbers, and hyphens')
            .optional(),
        category: z.string().max(50).optional().nullable(),
        icon_url: z.string().url().max(255).optional().nullable(),
        level: z.number().int().min(0).max(100).optional(),
    }),
});

/**
 * Skill Update Schema
 */
export const updateSkillSchema = z.object({
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
        category: z.string().max(50).optional().nullable(),
        icon_url: z.string().url().max(255).optional().nullable(),
        level: z.number().int().min(0).max(100).optional(),
    }),
});

export type CreateSkillRequest = z.infer<typeof createSkillSchema>['body'];
export type UpdateSkillRequest = z.infer<typeof updateSkillSchema>['body'];
export type SkillQuery = z.infer<typeof skillQuerySchema>['query'];
