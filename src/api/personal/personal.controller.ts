import { Request, Response, NextFunction } from 'express';
import * as personalService from '../../core/services/personal.service';
import * as jobRoleService from '../../core/services/job-role.service';
import { sendSuccess, sendList } from '../../utils/response';

/**
 * Get personal content
 */
export const getPersonal = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const personal = await personalService.getPersonalContent();
        sendSuccess(res, 'Personal content retrieved', personal);
    } catch (error) {
        next(error);
    }
};

/**
 * Update personal content
 */
export const updatePersonal = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await personalService.updatePersonalContent(req.body);
        sendSuccess(res, 'Personal content updated', updated);
    } catch (error) {
        next(error);
    }
};

/**
 * Get all job roles
 */
export const getJobRoles = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await jobRoleService.getAllJobRoles();
        // Standardize list response even if not paginated on backend
        sendList(res, 'Job roles retrieved', roles, {
            page: 1,
            limit: roles.length || 1,
            total: roles.length,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Create a new job role
 */
export const createJobRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const role = await jobRoleService.createJobRole(req.body);
        sendSuccess(res, 'Job role created', role, 201);
    } catch (error) {
        next(error);
    }
};

/**
 * Update a job role
 */
export const updateJobRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const role = await jobRoleService.updateJobRole(id, req.body);
        sendSuccess(res, 'Job role updated', role);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a job role
 */
export const deleteJobRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await jobRoleService.deleteJobRole(id);
        sendSuccess(res, 'Job role deleted', null);
    } catch (error) {
        next(error);
    }
};
