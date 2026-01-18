import { prisma } from '../../../src/data/prisma.client';
import * as UserRepository from '../../../src/data/repositories/user.repository';

describe('User Repository', () => {
    beforeAll(async () => {
        // Clean up test data
        await prisma.user.deleteMany();
    });

    afterAll(async () => {
        await prisma.user.deleteMany();
        await prisma.$disconnect();
    });

    describe('create', () => {
        it('should create a new user', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'hashedpassword123',
                name: 'Test User',
                role: 'VIEWER' as const,
            };

            const user = await UserRepository.create(userData);

            expect(user).toHaveProperty('id');
            expect(user.email).toBe(userData.email);
            expect(user.name).toBe(userData.name);
            expect(user.role).toBe(userData.role);
            expect(user.password).toBe(userData.password);
        });

        it('should throw error on duplicate email', async () => {
            const userData = {
                email: 'duplicate@example.com',
                password: 'hashedpassword123',
                name: 'Test User',
                role: 'VIEWER' as const,
            };

            await UserRepository.create(userData);

            await expect(UserRepository.create(userData)).rejects.toThrow();
        });
    });

    describe('findByEmail', () => {
        it('should find user by email', async () => {
            const userData = {
                email: 'find@example.com',
                password: 'hashedpassword123',
                name: 'Find User',
                role: 'ADMIN' as const,
            };

            await UserRepository.create(userData);

            const user = await UserRepository.findByEmail('find@example.com');

            expect(user).not.toBeNull();
            expect(user?.email).toBe(userData.email);
            expect(user?.name).toBe(userData.name);
        });

        it('should return null for non-existent email', async () => {
            const user = await UserRepository.findByEmail('nonexistent@example.com');

            expect(user).toBeNull();
        });
    });

    describe('findById', () => {
        it('should find user by ID', async () => {
            const userData = {
                email: 'findbyid@example.com',
                password: 'hashedpassword123',
                name: 'FindById User',
                role: 'VIEWER' as const,
            };

            const createdUser = await UserRepository.create(userData);
            const foundUser = await UserRepository.findById(createdUser.id);

            expect(foundUser).not.toBeNull();
            expect(foundUser?.id).toBe(createdUser.id);
            expect(foundUser?.email).toBe(userData.email);
        });

        it('should return null for non-existent ID', async () => {
            const user = await UserRepository.findById('non-existent-uuid');

            expect(user).toBeNull();
        });
    });

    describe('update', () => {
        it('should update user fields', async () => {
            const userData = {
                email: 'update@example.com',
                password: 'hashedpassword123',
                name: 'Update User',
                role: 'VIEWER' as const,
            };

            const createdUser = await UserRepository.create(userData);

            const updated = await UserRepository.update(createdUser.id, {
                name: 'Updated Name',
                role: 'ADMIN',
            });

            expect(updated.name).toBe('Updated Name');
            expect(updated.role).toBe('ADMIN');
            expect(updated.email).toBe(userData.email); // Unchanged
        });
    });

    describe('delete', () => {
        it('should delete user by ID', async () => {
            const userData = {
                email: 'delete@example.com',
                password: 'hashedpassword123',
                name: 'Delete User',
                role: 'VIEWER' as const,
            };

            const createdUser = await UserRepository.create(userData);
            const deleted = await UserRepository.deleteUser(createdUser.id);

            expect(deleted.id).toBe(createdUser.id);

            const found = await UserRepository.findById(createdUser.id);
            expect(found).toBeNull();
        });
    });

    describe('findAll', () => {
        it('should return all users ordered by created_at desc', async () => {
            await prisma.user.deleteMany();

            await UserRepository.create({
                email: 'user1@example.com',
                password: 'pass1',
                name: 'User 1',
                role: 'VIEWER',
            });

            await UserRepository.create({
                email: 'user2@example.com',
                password: 'pass2',
                name: 'User 2',
                role: 'ADMIN',
            });

            const users = await UserRepository.findAll();

            expect(users).toHaveLength(2);
            expect(users[0]!.email).toBe('user2@example.com'); // Most recent first
            expect(users[1]!.email).toBe('user1@example.com');
        });
    });
});

