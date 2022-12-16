module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    "@models/(.*)": "<rootDir>/src/app/shared/models/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
    "@utils/(.*)": "<rootDir>/src/app/utils/$1",
    "^environments/(.*)$": "<rootDir>/src/environments/$1"
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
