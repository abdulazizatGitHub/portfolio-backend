import { Request, Response } from 'express';
import * as projectService from '@core/services/project.service';
import { sendSuccess, sendList } from '@utils/response';

/**
 * Get all projects with pagination and filters
 */
export const getProjects = async (req: Request, res: Response) => {
    // validate() middleware has already parsed/transformed req.query per
    // projectQuerySchema, so is_published/featured/includeDeleted arrive
    // here as real booleans (or undefined) already — re-comparing against
    // the string 'true'/'false' here would always be false and silently
    // disable these filters.
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
    } = req.query as unknown as {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
        category_id?: string;
        is_published?: boolean;
        featured?: boolean;
        includeDeleted?: boolean;
    };

    const { projects, total } = await projectService.getAllProjects({
        page,
        limit,
        search,
        sortBy,
        sortOrder,
        category_id,
        is_published,
        featured,
        includeDeleted,
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
