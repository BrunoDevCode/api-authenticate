const { name } = require('./package.json');

module.exports = {
  displayName: name,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/tests/*.+(ts|tsx|js)"
  ],
};
