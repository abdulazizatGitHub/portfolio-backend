module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
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
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    coverageDirectory: 'coverage',
    verbose: true,
};
