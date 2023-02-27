/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['noodle/react', 'noodle/storybook'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
  ],
};
