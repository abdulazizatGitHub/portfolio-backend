import * as authService from '../../../src/core/services/auth.service';
import * as userRepository from '../../../src/data/repositories/user.repository';
import * as passwordService from '../../../src/core/services/password.service';
import { Role } from '../../../src/data/prisma.client';
import { ConflictError, UnauthorizedError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/user.repository');
jest.mock('../../../src/core/services/password.service');

describe('Auth Service', () => {
    const mockUser = {
        id: 'user-123',
        email: 'test@example.com',
        password: 'hashed-password',
        name: 'Test User',
        role: Role.VIEWER,
        created_at: new Date(),
        updated_at: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('register', () => {
        it('should register a new user successfully', async () => {
            (userRepository.findByEmail as jest.Mock).mockResolvedValue(null);
            (passwordService.hashPassword as jest.Mock).mockResolvedValue('hashed-password');
            (userRepository.create as jest.Mock).mockResolvedValue(mockUser);

            const result = await authService.register({
                email: 'test@example.com',
                password: 'Password123!',
                name: 'Test User',
            });

            expect(result.user.email).toBe(mockUser.email);
            expect(result.tokens.accessToken).toBeDefined();
            expect(userRepository.create).toHaveBeenCalled();
        });

        it('should throw ConflictError if email exists', async () => {
            (userRepository.findByEmail as jest.Mock).mockResolvedValue(mockUser);

            await expect(authService.register({
                email: 'test@example.com',
                password: 'Password123!',
                name: 'Test User',
            })).rejects.toThrow(ConflictError);
        });
    });

    describe('login', () => {
        it('should login successfully with correct credentials', async () => {
            (userRepository.findByEmail as jest.Mock).mockResolvedValue(mockUser);
            (passwordService.verifyPassword as jest.Mock).mockResolvedValue(true);

            const result = await authService.login({
                email: 'test@example.com',
                password: 'Password123!',
            });

            expect(result.user.id).toBe(mockUser.id);
            expect(result.tokens.accessToken).toBeDefined();
        });

        it('should throw UnauthorizedError with incorrect password', async () => {
            (userRepository.findByEmail as jest.Mock).mockResolvedValue(mockUser);
            (passwordService.verifyPassword as jest.Mock).mockResolvedValue(false);

            await expect(authService.login({
                email: 'test@example.com',
                password: 'wrong',
            })).rejects.toThrow(UnauthorizedError);
        });
    });
});
