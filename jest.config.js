module.exports = {
  setupFiles: [
    '<rootDir>/src/test-utils/jest.setup.js',
  ],
  testMatch: [
    '**/src/?(*.)+(spec|test).js',
    '**/src/components/**/?(*.)+(spec|test).js',
    '**/src/screens/**/?(*.)+(spec|test).js',
    '**/src/libraries/**/?(*.)+(spec|test).js',
    '**/src/store/**/**/?(*.)+(spec|test).js',
  ],
  collectCoverageFrom: [
    '**/src/components/**/*.{js,jsx}',
    '**/src/screens/**/*.{js,jsx}',
    '**/src/libraries/**/*.{js,jsx}',
    '**/src/store/**/*.{js,jsx}',
  ],
  testURL: 'http://localhost',
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '\\.(css|scss|png|svg)$': '<rootDir>/src/test-utils/empty-module.js',
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  verbose: true,
};
