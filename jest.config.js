const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["./jest.setup"],
};

module.exports = createJestConfig(customJestConfig);
