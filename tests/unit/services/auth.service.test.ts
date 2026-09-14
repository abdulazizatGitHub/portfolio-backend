import * as authService from '../../../src/core/services/auth.service';
import * as userRepository from '../../../src/data/repositories/user.repository';
import * as passwordService from '../../../src/core/services/password.service';
import * as tokenService from '../../../src/core/services/token.service';
import { Role } from '../../../src/data/prisma.client';
import { ConflictError, NotFoundError, UnauthorizedError } from '../../../src/core/exceptions/app-errors';

jest.mock('../../../src/data/repositories/user.repository');
jest.mock('../../../src/core/services/password.service');
jest.mock('../../../src/core/services/token.service');

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

    const mockTokens = { accessToken: 'access-token', refreshToken: 'refresh-token' };

    beforeEach(() => {
        jest.clearAllMocks();
        (tokenService.generateTokenPair as jest.Mock).mockReturnValue(mockTokens);
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

        it('should throw UnauthorizedError if email does not exist', async () => {
            (userRepository.findByEmail as jest.Mock).mockResolvedValue(null);

            await expect(authService.login({
                email: 'missing@example.com',
                password: 'whatever',
            })).rejects.toThrow(UnauthorizedError);
        });
    });

    describe('refresh', () => {
        it('should return a new token pair for a valid refresh token', async () => {
            (tokenService.verifyRefreshToken as jest.Mock).mockReturnValue({ sub: mockUser.id });
            (userRepository.findById as jest.Mock).mockResolvedValue(mockUser);

            const result = await authService.refresh('valid-refresh-token');
            expect(result).toEqual(mockTokens);
        });

        it('should throw UnauthorizedError if the user no longer exists', async () => {
            (tokenService.verifyRefreshToken as jest.Mock).mockReturnValue({ sub: 'gone-user' });
            (userRepository.findById as jest.Mock).mockResolvedValue(null);

            await expect(authService.refresh('valid-refresh-token')).rejects.toThrow(UnauthorizedError);
        });
    });

    describe('validateUser', () => {
        it('should return user data if the user exists', async () => {
            (userRepository.findById as jest.Mock).mockResolvedValue(mockUser);

            const result = await authService.validateUser(mockUser.id);
            expect(result).toEqual({
                id: mockUser.id,
                email: mockUser.email,
                name: mockUser.name,
                role: mockUser.role,
            });
        });

        it('should throw NotFoundError if the user does not exist', async () => {
            (userRepository.findById as jest.Mock).mockResolvedValue(null);
            await expect(authService.validateUser('missing')).rejects.toThrow(NotFoundError);
        });
    });
});
