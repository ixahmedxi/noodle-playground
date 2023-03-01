/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['noodle/react', 'noodle/storybook'],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      extends: ['noodle/vitest'],
    },
    {
      files: ['.storybook/**'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
