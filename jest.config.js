export default {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  verbose: true,
  watchman: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'src/ExcelFormulaBeautifier.js',
    '!src/index.js',
    '!src/__tests__/**/*.js',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
      statements: 80,
      branches: 70,
    },
  },
};
