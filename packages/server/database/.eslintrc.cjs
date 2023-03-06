/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  // no extra config needed but here if in the future we need to add something.
};

module.exports = config;
