/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['noodle/react', 'noodle/next'],
  overrides: [
    {
      files: ['e2e/**/*.ts'],
      extends: ['noodle/playwright'],
    },
    {
      files: [
        'src/**/*.spec.ts',
        'src/**/*.spec.tsx',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
      ],
      extends: ['noodle/vitest'],
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    next: {
      rootDir: 'apps/web',
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
};
