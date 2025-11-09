const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  /* transform: {
    ...tsJestTransformCfg,
  }, */
  // eslint-disable-next-line no-dupe-keys
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapping: {
    '^react-test-renderer$': require.resolve('react-test-renderer'),
  },
  automock: false
};