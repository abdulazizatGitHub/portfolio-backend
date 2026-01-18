import { prisma, User, Prisma } from '../prisma.client';

/**
 * User Repository
 * Data access layer for User model
 */

/**
 * Find user by email
 * @param email - User email address
 * @returns User or null if not found
 */
export const findByEmail = async (email: string): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

/**
 * Find user by ID
 * @param id - User ID
 * @returns User or null if not found
 */
export const findById = async (id: string): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

/**
 * Create a new user
 * @param data - User creation data
 * @returns Created user
 */
export const create = async (
    data: Prisma.UserCreateInput
): Promise<User> => {
    return await prisma.user.create({
        data,
    });
};

/**
 * Update user by ID
 * @param id - User ID
 * @param data - User update data
 * @returns Updated user
 */
export const update = async (
    id: string,
    data: Prisma.UserUpdateInput
): Promise<User> => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

/**
 * Delete user by ID
 * @param id - User ID
 * @returns Deleted user
 */
export const deleteUser = async (id: string): Promise<User> => {
    return await prisma.user.delete({
        where: { id },
    });
};

/**
 * Find all users
 * @returns Array of users
 */
export const findAll = async (): Promise<User[]> => {
    return await prisma.user.findMany({
        orderBy: { created_at: 'desc' },
    });
};

