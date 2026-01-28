import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';
import { BadRequestError } from '../exceptions/app-errors';

// Base upload directory
const UPLOAD_ROOT = 'uploads';

// Ensure directories exist
const folders = ['images', 'cvs', 'documents', 'skills'];
folders.forEach(folder => {
    const dir = path.join(UPLOAD_ROOT, folder);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

/**
 * Disk Storage Configuration
 */
const storage = multer.diskStorage({
    destination: (_req, file, cb) => {
        let folder = 'documents';
        if (file.mimetype.startsWith('image/')) {
            folder = 'images';
            if (file.fieldname === 'skill-icon' || file.fieldname === 'icon') {
                folder = 'skills';
            }
        } else if (file.fieldname === 'cv') {
            folder = 'cvs';
        }
        cb(null, path.join(UPLOAD_ROOT, folder));
    },
    filename: (_req, file, cb) => {
        // Create unique filename: fieldname-timestamp.ext
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

/**
 * File Filter
 */
const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const allowedDocTypes = ['application/pdf'];

    if (file.fieldname === 'image' || file.fieldname === 'skill-icon' || file.fieldname === 'icon') {
        if (allowedImageTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new BadRequestError('Only JPEG, PNG and WEBP images are allowed'));
        }
    } else if (file.fieldname === 'cv' || file.fieldname === 'document') {
        if (allowedDocTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new BadRequestError('Only PDF documents are allowed'));
        }
    } else {
        cb(new BadRequestError('Unknown upload field'));
    }
};

/**
 * Upload Middleware Instances
 */
export const uploadImage = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export const uploadDocument = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});
