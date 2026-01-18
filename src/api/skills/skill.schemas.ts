import { z } from 'zod';

/**
 * Skill Creation Schema
 */
export const createSkillSchema = z.object({
    body: z.object({
        name: z.string().min(1).max(50),
        slug: z
            .string()
            .min(1)
            .max(50)
            .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase and only contain letters, numbers, and hyphens'),
        category: z.string().max(50).optional().nullable(),
        level: z.string().max(50).optional().nullable(),
        icon_url: z.string().url().optional().nullable(),
        order_index: z.number().int().min(0).optional(),
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
        name: z.string().min(1).max(50).optional(),
        slug: z
            .string()
            .min(1)
            .max(50)
            .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase and only contain letters, numbers, and hyphens')
            .optional(),
        category: z.string().max(50).optional().nullable(),
        level: z.string().max(50).optional().nullable(),
        icon_url: z.string().url().optional().nullable(),
        order_index: z.number().int().min(0).optional(),
    }),
});

export type CreateSkillRequest = z.infer<typeof createSkillSchema>['body'];
export type UpdateSkillRequest = z.infer<typeof updateSkillSchema>['body'];
