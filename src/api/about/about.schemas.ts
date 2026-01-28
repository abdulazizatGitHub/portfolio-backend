import { z } from 'zod';

/**
 * About Content Schemas
 */
export const aboutContentSchema = z.object({
    body: z.object({
        role_title: z.string().trim().min(1, 'Role title is required').max(100),
        heading_prefix: z.string().trim().max(50).optional(),
        heading_highlight: z.string().trim().max(50).optional(),
        portrait_image_url: z.string().trim().max(255).optional().nullable(),
    }),
});

/**
 * About Paragraph Schemas
 */
export const paragraphSchema = z.object({
    body: z.object({
        content: z.string().trim().min(10, 'Paragraph must be at least 10 characters'),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateParagraphSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid paragraph ID format'),
    }),
    body: paragraphSchema.shape.body.partial(),
});

/**
 * Stat Schemas
 */
export const statSchema = z.object({
    body: z.object({
        label: z.string().trim().min(1, 'Label is required').max(50),
        value: z.string().trim().min(1, 'Value is required').max(50),
        context: z.string().trim().optional().default('about'),
    }),
});

export const updateStatSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid stat ID format'),
    }),
    body: statSchema.shape.body.partial(),
});

/**
 * Deletion Schemas
 */
export const deleteResourceSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid ID format'),
    }),
});
