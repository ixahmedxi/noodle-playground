/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['noodle/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './packages/*/.storybook/tsconfig.json',
      './packages/*/tsconfig.json',
      './apps/*/tsconfig.json',
    ],
  },
};
