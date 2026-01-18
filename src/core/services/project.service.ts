import * as projectRepository from '@data/repositories/project.repository';
import { NotFoundError } from '../exceptions/app-errors';
import { Project } from '@data/prisma.client';
import { ProjectWithRelations } from '@data/repositories/project.repository';

/**
 * Project Service
 * Logic layer for project management and relational orchestration
 */

/**
 * Get all projects with optional filters
 */
export const getAllProjects = async (filters?: {
    is_published?: boolean;
    featured?: boolean;
    category_id?: string;
}): Promise<ProjectWithRelations[]> => {
    return await projectRepository.findAll(filters);
};

/**
 * Get project by ID
 */
export const getProjectById = async (id: string): Promise<ProjectWithRelations> => {
    const project = await projectRepository.findById(id);
    if (!project) {
        throw new NotFoundError('Project not found', 'PROJECT_NOT_FOUND');
    }
    return project;
};

/**
 * Create a new project
 * @param data - Project data including skills to connect
 */
export const createProject = async (data: {
    title: string;
    description: string;
    long_description?: string;
    demo_url?: string;
    repo_url?: string;
    is_published?: boolean;
    featured?: boolean;
    order_index?: number;
    category_id: string;
    skill_ids?: string[];
}): Promise<Project> => {
    const { skill_ids, category_id, ...projectData } = data;

    // Create the project first
    const project = await projectRepository.create({
        ...projectData,
        category: { connect: { id: category_id } },
        // Connect skills if provided
        project_skills: skill_ids ? {
            create: skill_ids.map(skill_id => ({
                skill: { connect: { id: skill_id } }
            }))
        } : undefined
    });

    return project;
};

/**
 * Update an existing project
 */
export const updateProject = async (
    id: string,
    data: {
        title?: string;
        description?: string;
        long_description?: string;
        demo_url?: string;
        repo_url?: string;
        is_published?: boolean;
        featured?: boolean;
        order_index?: number;
        category_id?: string;
        skill_ids?: string[];
    }
): Promise<Project> => {
    await getProjectById(id);

    const { skill_ids, category_id, ...projectData } = data;

    const updatedProject = await projectRepository.update(id, {
        ...projectData,
        category: category_id ? { connect: { id: category_id } } : undefined,
        project_skills: skill_ids ? {
            deleteMany: {}, // Delete all existing associations
            create: skill_ids.map(skill_id => ({
                skill: { connect: { id: skill_id } }
            }))
        } : undefined
    });

    return updatedProject;
};

/**
 * Soft delete a project
 */
export const deleteProject = async (id: string): Promise<Project> => {
    await getProjectById(id);
    return await projectRepository.softDelete(id);
};
