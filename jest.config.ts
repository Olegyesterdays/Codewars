// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node'
  // если вам нужны ESM-тесты на TypeScript, добавьте:
  // extensionsToTreatAsEsm: ['.ts'],
  // globals: { 'ts-jest': { useESM: true } },
};
