import { Request, Response, NextFunction } from 'express';
import * as contactService from '../../core/services/contact.service';
import { sendSuccess } from '../../utils/response';
import { ActivityService, ActivityAction } from '@core/services/activity.service';

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

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'contact',
            entityId: updated.id,
            entityName: 'Contact Content',
            description: 'Updated contact section metadata and informational text',
        });

        sendSuccess(res, 'Contact content updated', updated);
    } catch (error) {
        next(error);
    }
};

// --- Info Items ---

export const createInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await contactService.createInfoItem(req.body);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.CREATE,
            entityType: 'contact_info',
            entityId: item.id,
            entityName: item.label,
            description: `Added contact info: ${item.label}`,
        });

        sendSuccess(res, 'Contact info item created', item, 201);
    } catch (error) {
        next(error);
    }
};

export const updateInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await contactService.updateInfoItem(id, req.body);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'contact_info',
            entityId: updated.id,
            entityName: updated.label,
            description: `Updated contact info: ${updated.label}`,
        });

        sendSuccess(res, 'Contact info item updated', updated);
    } catch (error) {
        next(error);
    }
};

export const deleteInfoItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const item = await contactService.getInfoItemById(id);
        await contactService.deleteInfoItem(id);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.DELETE,
            entityType: 'contact_info',
            entityId: id,
            entityName: item.label,
            description: `Deleted contact info: ${item.label}`,
        });

        sendSuccess(res, 'Contact info item deleted', null);
    } catch (error) {
        next(error);
    }
};

// --- Social Links ---

export const createSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await contactService.createSocialLink(req.body);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.CREATE,
            entityType: 'social_link',
            entityId: link.id,
            entityName: link.platform,
            description: `Added social link: ${link.platform}`,
        });

        sendSuccess(res, 'Social link created', link, 201);
    } catch (error) {
        next(error);
    }
};

export const updateSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updated = await contactService.updateSocialLink(id, req.body);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.UPDATE,
            entityType: 'social_link',
            entityId: updated.id,
            entityName: updated.platform,
            description: `Updated social link: ${updated.platform}`,
        });

        sendSuccess(res, 'Social link updated', updated);
    } catch (error) {
        next(error);
    }
};

export const deleteSocialLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const link = await contactService.getSocialLinkById(id);
        await contactService.deleteSocialLink(id);

        // Log activity
        await ActivityService.log({
            userId: (req as any).user.id,
            action: ActivityAction.DELETE,
            entityType: 'social_link',
            entityId: id,
            entityName: link.platform,
            description: `Deleted social link: ${link.platform}`,
        });

        sendSuccess(res, 'Social link deleted', null);
    } catch (error) {
        next(error);
    }
};
