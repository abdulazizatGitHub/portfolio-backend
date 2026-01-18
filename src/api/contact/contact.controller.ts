import { Request, Response, NextFunction } from 'express';
import * as contactService from '../../core/services/contact.service';
import { sendSuccess } from '../../utils/response';

/**
 * Contact Controller
 * Handles communication channels and social links
 */

/**
 * Get aggregated contact and social data
 */
export const getContact = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await contactService.getContactData();
        sendSuccess(res, 'Contact data retrieved', data);
    } catch (error) {
        next(error);
    }
};

/**
 * Update contact metadata (upsert singleton)
 */
export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updated = await contactService.updateContactContent(req.body);
        sendSuccess(res, 'Contact content updated', updated);
    } catch (error) {
        next(error);
    }
};

// --- Info Items ---

export const createInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await contactService.createInfoItem(req.body);
        sendSuccess(res, 'Contact info item created', item, 201);
    } catch (error) {
        next(error);
    }
};

export const updateInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await contactService.updateInfoItem(id, req.body);
        sendSuccess(res, 'Contact info item updated', updated);
    } catch (error) {
        next(error);
    }
};

export const deleteInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await contactService.deleteInfoItem(id);
        sendSuccess(res, 'Contact info item deleted', null);
    } catch (error) {
        next(error);
    }
};

// --- Social Links ---

export const createSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await contactService.createSocialLink(req.body);
        sendSuccess(res, 'Social link created', link, 201);
    } catch (error) {
        next(error);
    }
};

export const updateSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await contactService.updateSocialLink(id, req.body);
        sendSuccess(res, 'Social link updated', updated);
    } catch (error) {
        next(error);
    }
};

export const deleteSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await contactService.deleteSocialLink(id);
        sendSuccess(res, 'Social link deleted', null);
    } catch (error) {
        next(error);
    }
};
