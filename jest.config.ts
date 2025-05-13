import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node'
  // Если вы используете ESM-модули в TypeScript, раскомментируйте следующие строки:
  // extensionsToTreatAsEsm: ['.ts'],
  // globals: {
  //   'ts-jest': {
  //     useESM: true,
  //   },
  // },
};

export default config;
