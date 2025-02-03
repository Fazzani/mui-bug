import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      '<rootDir>/config/testing/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/config/testing/__mocks__/styleMock.js',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
