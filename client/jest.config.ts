import { type JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  verbose: true,
  clearMocks: true,
  preset: 'ts-jest',
  displayName: 'jest',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['node_modules/(?!(mui-one-time-password-input)/)'],
};

export default config;
