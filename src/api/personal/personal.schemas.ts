import { z } from 'zod';

/**
 * Personal Content Schemas
 */
export const personalSchema = z.object({
    body: z.object({
        name: z.string().trim().min(1, 'Name is required').max(100),
        title_prefix: z.string().trim().min(1, 'Title prefix is required').max(50),
        description: z.string().trim().min(10, 'Description must be at least 10 characters'),
        cv_file_path: z.string().trim().min(1, 'CV file path is required'),
        cv_download_name: z.string().trim().min(1, 'Download name is required'),
    }),
});

export const updatePersonalSchema = z.object({
    body: personalSchema.shape.body.partial(),
});

/**
 * Job Role Schemas
 */
export const jobRoleSchema = z.object({
    body: z.object({
        label: z.string().trim().min(1, 'Label is required').max(100),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateJobRoleSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid job role ID format'),
    }),
    body: jobRoleSchema.shape.body.partial(),
});

export const deleteJobRoleSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid job role ID format'),
    }),
});
