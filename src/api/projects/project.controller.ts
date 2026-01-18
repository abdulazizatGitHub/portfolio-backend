import { Request, Response } from 'express';
import * as projectService from '@core/services/project.service';
import { sendSuccess, sendList } from '@utils/response';

/**
 * Get all projects with pagination and filters
 */
export const getProjects = async (req: Request, res: Response) => {
    const {
        page,
        limit,
        search,
        sortBy,
        sortOrder,
        category_id,
        is_published,
        featured,
        includeDeleted
    } = req.query;

    const { projects, total } = await projectService.getAllProjects({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        search: search as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as 'asc' | 'desc',
        category_id: category_id as string,
        is_published: is_published === 'true' ? true : (is_published === 'false' ? false : undefined),
        featured: featured === 'true' ? true : (featured === 'false' ? false : undefined),
        includeDeleted: includeDeleted === 'true',
    });

    return sendList(res, 'Projects retrieved successfully', projects, {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 10,
        total,
    });
};

/**
 * Get project by ID
 */
export const getProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const project = await projectService.getProjectById(id);
    return sendSuccess(res, 'Project retrieved successfully', project);
};

/**
 * Create a new project
 */
export const createProject = async (req: Request, res: Response) => {
    const project = await projectService.createProject(req.body);
    return sendSuccess(res, 'Project created successfully', project, 201);
};

/**
 * Update project by ID
 */
export const updateProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const project = await projectService.updateProject(id, req.body);
    return sendSuccess(res, 'Project updated successfully', project);
};

/**
 * Soft delete project by ID
 */
export const deleteProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await projectService.deleteProject(id);
    return res.status(204).send();
};

/**
 * Restore soft-deleted project
 */
export const restoreProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const project = await projectService.restoreProject(id);
    return sendSuccess(res, 'Project restored successfully', project);
};
