import { z } from 'zod';

/**
 * Common Timeline Fields
 */
const commonTimelineBody = {
    period: z.string().trim().min(1, 'Period is required').max(100), // e.g., "2020 - 2024"
    title: z.string().trim().min(1, 'Title is required').max(100),
    description: z.string().trim().min(10, 'Description must be at least 10 characters'),
    order_index: z.number().int().min(0).default(0),
};

/**
 * Education Schemas
 */
export const educationSchema = z.object({
    body: z.object({
        institution: z.string().trim().min(1, 'Institution is required').max(100),
        degree: z.string().trim().min(1, 'Degree is required').max(100),
        ...commonTimelineBody,
    }).omit({ title: true }), // Using institution/degree for education
});

// Wait, looking at schema again: education_entries has period, title, description.
// It DOES NOT have institution/degree. I should use title for the main header.
// Actually, I'll stick to the Prisma schema fields exactly.

export const educationPrismaSchema = z.object({
    body: z.object({
        period: z.string().trim().min(1, 'Period is required').max(100),
        title: z.string().trim().min(1, 'Title is required').max(100), // e.g., "B.S. in CS, University of X"
        description: z.string().trim().min(10, 'Description must be at least 10 characters'),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateEducationSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid education ID format'),
    }),
    body: educationPrismaSchema.shape.body.partial(),
});

/**
 * Experience Schemas (organization + nested roles)
 */
export const employmentTypeEnum = z.enum([
    'FULL_TIME',
    'PART_TIME',
    'CONTRACT',
    'INTERNSHIP',
    'FREELANCE',
    'OTHER',
]);

const experienceRoleBody = z.object({
    job_title: z.string().trim().min(1, 'Job title is required').max(150),
    start_date: z.coerce.date(),
    end_date: z.coerce.date().nullable().optional(),
    description: z.string().trim().min(10, 'Description must be at least 10 characters'),
    order_index: z.number().int().min(0).default(0),
});

export const experiencePrismaSchema = z.object({
    body: z.object({
        organization: z.string().trim().min(1, 'Organization is required').max(150),
        location: z.string().trim().max(150).optional(),
        employment_type: employmentTypeEnum.optional(),
        summary: z.string().trim().optional(),
        order_index: z.number().int().min(0).default(0),
        roles: z.array(experienceRoleBody).optional(),
    }),
});

export const updateExperienceSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid experience ID format'),
    }),
    body: experiencePrismaSchema.shape.body.omit({ roles: true }).partial(),
});

export const experienceRoleSchema = z.object({
    params: z.object({
        experienceId: z.string().uuid('Invalid experience ID format'),
    }),
    body: experienceRoleBody,
});

export const updateExperienceRoleSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid role ID format'),
    }),
    body: experienceRoleBody.partial(),
});

/**
 * Deletion/Lookup Schema
 */
export const timelineIdSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid ID format'),
    }),
});
