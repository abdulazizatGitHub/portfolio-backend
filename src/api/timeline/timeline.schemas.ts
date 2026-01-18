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
 * Experience Schemas
 */
export const experiencePrismaSchema = z.object({
    body: z.object({
        period: z.string().trim().min(1, 'Period is required').max(100),
        title: z.string().trim().min(1, 'Title is required').max(100), // e.g., "Software Engineer, Company Y"
        description: z.string().trim().min(10, 'Description must be at least 10 characters'),
        order_index: z.number().int().min(0).default(0),
    }),
});

export const updateExperienceSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid experience ID format'),
    }),
    body: experiencePrismaSchema.shape.body.partial(),
});

/**
 * Deletion/Lookup Schema
 */
export const timelineIdSchema = z.object({
    params: z.object({
        id: z.string().uuid('Invalid ID format'),
    }),
});
