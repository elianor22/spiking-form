
module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/*.js?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules)[/\\\\]"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object

    "^.+\\.jsx?$": "babel-jest",
    // "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  // watchPlugins: ['jest-watch-typeahead/filename'],
  // collectCoverage: false,
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //     statements: 70
  //   }
  // },
  coverageReporters: ["json", "html"],
  collectCoverageFrom: ["<rootDir>/src/**/*.*", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
