import * as projectRepository from '@data/repositories/project.repository';
import * as categoryRepository from '@data/repositories/category.repository';
import * as skillRepository from '@data/repositories/skill.repository';
import { NotFoundError, BadRequestError } from '../exceptions/app-errors';
import { Project } from '@data/prisma.client';
import { ProjectWithRelations } from '@data/repositories/project.repository';

/**
 * Get all projects with pagination and filters
 */
export const getAllProjects = async (options: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    category_id?: string;
    is_published?: boolean;
    featured?: boolean;
    includeDeleted?: boolean;
} = {}): Promise<{ projects: ProjectWithRelations[]; total: number }> => {
    const {
        page = 1,
        limit = 10,
        ...filters
    } = options;

    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
        projectRepository.findAll({ ...filters, skip, take: limit }),
        projectRepository.count(filters),
    ]);

    return { projects, total };
};

/**
 * Get project by ID
 */
export const getProjectById = async (id: string, includeDeleted = false): Promise<ProjectWithRelations> => {
    const project = await projectRepository.findById(id, includeDeleted);
    if (!project) {
        throw new NotFoundError('Project not found', 'PROJECT_NOT_FOUND');
    }
    return project;
};

/**
 * Validate Category and Skills existence
 */
const validateRelationships = async (category_id?: string, skill_ids?: string[]) => {
    if (category_id) {
        const category = await categoryRepository.findById(category_id);
        if (!category) {
            throw new BadRequestError(`Category with ID ${category_id} not found`, 'RELATION_NOT_FOUND');
        }
    }

    if (skill_ids && skill_ids.length > 0) {
        const skillsFound = await Promise.all(skill_ids.map(id => skillRepository.findById(id)));
        const missingSkillIndex = skillsFound.findIndex(s => !s);
        if (missingSkillIndex !== -1) {
            throw new BadRequestError(`Skill with ID ${skill_ids[missingSkillIndex]} not found`, 'RELATION_NOT_FOUND');
        }
    }
};

/**
 * Create a new project
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
    // 1. Validate dependencies
    await validateRelationships(data.category_id, data.skill_ids);

    const { skill_ids, category_id, ...projectData } = data;

    // 2. Create project with associations
    return await projectRepository.create({
        ...projectData,
        category: { connect: { id: category_id } },
        project_skills: skill_ids ? {
            create: skill_ids.map(id => ({
                skill: { connect: { id } }
            }))
        } : undefined
    });
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
    // 1. Check if project exists
    await getProjectById(id);

    // 2. Validate dependencies if updated
    await validateRelationships(data.category_id, data.skill_ids);

    const { skill_ids, category_id, ...projectData } = data;

    // 3. Update with clean-replace for skills
    return await projectRepository.update(id, {
        ...projectData,
        category: category_id ? { connect: { id: category_id } } : undefined,
        project_skills: skill_ids ? {
            deleteMany: {},
            create: skill_ids.map(id => ({
                skill: { connect: { id } }
            }))
        } : undefined
    });
};

/**
 * Soft delete a project
 */
export const deleteProject = async (id: string): Promise<Project> => {
    await getProjectById(id);
    return await projectRepository.softDelete(id);
};

/**
 * Restore a soft-deleted project
 */
export const restoreProject = async (id: string): Promise<Project> => {
    const project = await getProjectById(id, true);
    if (!project.deleted_at) return project;
    return await projectRepository.restore(id);
};
