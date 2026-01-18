import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

/**
 * Password Service
 * Handles password hashing and verification
 */

/**
 * Hash a plain text password
 * @param password - Plain text password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Verify a plain text password against a hash
 * @param password - Plain text password
 * @param hash - Hashed password
 * @returns True if password matches hash, false otherwise
 */
export const verifyPassword = async (
    password: string,
    hash: string
): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
};
