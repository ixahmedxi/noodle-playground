/** @type {import('eslint').Linter.Config} */
const config = {
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
        'plugin:isaacscript/recommended',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
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
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'isaacscript/format-line-comments': [
          'error',
          {
            maxLength: 80,
          },
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: [
              'packages/*/tsconfig.json',
              'packages/server/*/tsconfig.json',
              'apps/*/tsconfig.json',
              'packages/*/.storybook/tsconfig.json',
            ],
          },
          node: {
            project: [
              'packages/*/tsconfig.json',
              'packages/server/*/tsconfig.json',
              'apps/*/tsconfig.json',
              'packages/*/.storybook/tsconfig.json',
            ],
          },
        },
      },
    },
  ],
  env: {
    node: true,
  },
};

module.exports = config;
