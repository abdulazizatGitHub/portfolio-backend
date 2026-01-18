import * as passwordService from '../../../src/core/services/password.service';

describe('Password Service', () => {
    const password = 'Password123!';

    describe('hashPassword', () => {
        it('should hash a password and return a string', async () => {
            const hash = await passwordService.hashPassword(password);
            expect(hash).toBeDefined();
            expect(typeof hash).toBe('string');
            expect(hash).not.toBe(password);
        });

        it('should produce different hashes for the same password due to salting', async () => {
            const hash1 = await passwordService.hashPassword(password);
            const hash2 = await passwordService.hashPassword(password);
            expect(hash1).not.toBe(hash2);
        });
    });

    describe('verifyPassword', () => {
        it('should return true for a correct password', async () => {
            const hash = await passwordService.hashPassword(password);
            const isValid = await passwordService.verifyPassword(password, hash);
            expect(isValid).toBe(true);
        });

        it('should return false for an incorrect password', async () => {
            const hash = await passwordService.hashPassword(password);
            const isValid = await passwordService.verifyPassword('wrongpassword', hash);
            expect(isValid).toBe(false);
        });
    });
});
