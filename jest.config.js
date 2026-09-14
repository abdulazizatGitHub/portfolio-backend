module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Integration tests share one real Postgres instance and clean up by
    // deleting rows with shared "test-" prefixes, so they must not run
    // concurrently across test files or they race and clobber each other.
    maxWorkers: 1,
    // Point at a disposable test database (portfolio_test_db), never the
    // dev database dev servers are actually serving from — several tests
    // do unscoped deleteMany() calls that would otherwise wipe live data.
    setupFiles: ['<rootDir>/tests/setupEnv.js'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    roots: ['<rootDir>/tests', '<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@api/(.*)$': '<rootDir>/src/api/$1',
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@data/(.*)$': '<rootDir>/src/data/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts',
        '!src/server.ts',
        '!src/app.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 84,
            functions: 90,
            lines: 92,
            statements: 93,
        },
    },
    coverageDirectory: 'coverage',
    verbose: true,
};
