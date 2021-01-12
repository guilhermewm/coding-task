module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/setupTest.js"], 
    transformIgnorePatterns: [
      '.+\\.scss$'
    ],
    moduleNameMapper: {
      '\\.scss$': 'identity-obj-proxy'
    }
  }