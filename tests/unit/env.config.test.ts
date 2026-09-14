describe('Env Config', () => {
    const ORIGINAL_ENV = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...ORIGINAL_ENV };
    });

    afterAll(() => {
        process.env = ORIGINAL_ENV;
    });

    it('should throw when required environment variables are invalid', () => {
        // dotenv.config() would otherwise reload the real .env and mask this
        jest.doMock('dotenv', () => ({ config: jest.fn() }));
        delete process.env.DATABASE_URL;
        process.env.JWT_SECRET = 'short'; // too short, fails schema

        expect(() => require('../../src/core/config/env.config')).toThrow(
            'Environment variable validation failed'
        );
    });

    it('should load successfully with valid environment variables', () => {
        jest.doMock('dotenv', () => ({ config: jest.fn() }));
        process.env.NODE_ENV = 'production';
        process.env.DATABASE_URL = 'postgresql://user:pass@localhost:5432/db';
        process.env.JWT_SECRET = 'a'.repeat(32);
        process.env.JWT_REFRESH_SECRET = 'b'.repeat(32);
        process.env.CORS_ORIGIN = 'http://localhost:3000,http://localhost:3001';
        process.env.REGISTER_ENABLED = 'true';

        const { config } = require('../../src/core/config/env.config');
        expect(config.isProduction).toBe(true);
        expect(config.isRegisterEnabled).toBe(true);
        expect(config.corsOrigins).toEqual(['http://localhost:3000', 'http://localhost:3001']);
    });
});
