/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    preset: "ts-jest",
    coverageProvider: "v8",
    testEnvironment: "jest-environment-jsdom",
    moduleDirectories: ["node_modules", "src"],
};

module.exports = config;
