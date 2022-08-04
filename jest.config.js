/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^~/$": "<rootDir>/app/",
  },
  transformIgnorePatterns: [
    "/node_modules/@remix-run/(?!web-blob|web-fetch|web-file|web-form-data|web-stream)",
  ],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
