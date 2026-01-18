import { Request, Response } from 'express';
import * as projectService from '@core/services/project.service';

/**
 * Get all projects with optional filtering
 */
export const getProjects = async (req: Request, res: Response) => {
    // Filters are validated by projectQuerySchema if used
    const projects = await projectService.getAllProjects(req.query);

    res.status(200).json({
        status: 'success',
        data: { projects },
    });
};

/**
 * Get project by ID
 */
export const getProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const project = await projectService.getProjectById(id);

    res.status(200).json({
        status: 'success',
        data: { project },
    });
};

/**
 * Create a new project
 */
export const createProject = async (req: Request, res: Response) => {
    const project = await projectService.createProject(req.body);

    res.status(201).json({
        status: 'success',
        data: { project },
    });
};

/**
 * Update an existing project
 */
export const updateProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const project = await projectService.updateProject(id, req.body);

    res.status(200).json({
        status: 'success',
        data: { project },
    });
};

/**
 * Delete a project
 */
export const deleteProject = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await projectService.deleteProject(id);

    res.status(204).send();
};
