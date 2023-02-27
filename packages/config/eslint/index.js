/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ['**/node_modules/*', '**/dist/*', '**/build/*'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
  ],
};
