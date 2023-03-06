/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['.prisma/client'] }],
    'import/no-extraneous-dependencies': 'off',
  },
  // no extra config needed but here if in the future we need to add something.
};

module.exports = config;
