import { z } from 'zod';

/**
 * Contact Content Schemas
 */
export const contactContentSchema = z.object({
    body: z.object({
        subtitle: z.string().trim().min(1, 'Subtitle is required').max(100),
        info_title: z.string().trim().max(100).optional(),
        info_description: z.string().trim().max(500).optional(),
        success_title: z.string().trim().min(1, 'Success title is required').max(100),
        success_message: z.string().trim().min(10, 'Success message must be at least 10 characters'),
    }),
});

/**
 * Contact Info Item Schemas
 */
export const contactInfoSchema = z.object({
    body: z.object({
        type: z.string().trim().min(1, 'Type is required'), // email, phone, location
        label: z.string().trim().min(1, 'Label is required').max(50),
        value: z.string().trim().min(1, 'Value is required').max(100),
        href: z.string().trim().optional(),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateContactInfoSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid contact info ID format'),
    }),
    body: contactInfoSchema.shape.body.partial(),
});

/**
 * Social Link Schemas
 */
export const socialLinkSchema = z.object({
    body: z.object({
        platform: z.string().trim().min(1, 'Platform name is required').max(50),
        url: z.string().trim().url('Invalid social link URL').max(255),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateSocialLinkSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid social link ID format'),
    }),
    body: socialLinkSchema.shape.body.partial(),
});

/**
 * Deletion Schema
 */
export const contactResourceIdSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid ID format'),
    }),
});
