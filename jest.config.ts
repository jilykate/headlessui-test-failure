import type {Config} from 'jest';

export default {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    "\\.[jt]sx?$": "ts-jest"
  },
  collectCoverage: false,
  modulePathIgnorePatterns: ['dist'],
  testEnvironment: 'jsdom',
} satisfies Config;
