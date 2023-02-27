/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: [
    '**/node_modules/*',
    '**/dist/*',
    '**/build/*',
    '**/storybook-static/*',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        // Most javascript files in the project are for config so importing devDependencies is expected.
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.spec.ts',
              '**/*.spec.tsx',
              '**/*.test.ts',
              '**/*.test.tsx',
              '**/*.config.ts',
              '**/*.setup.ts',
              '**/.storybook/**/*',
              '**/*.stories.tsx',
            ],
          },
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
          },
          node: true,
        },
      },
    },
  ],
  env: {
    node: true,
  },
};
