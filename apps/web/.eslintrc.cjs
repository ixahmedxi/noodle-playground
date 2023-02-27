/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['noodle/react', 'noodle/next'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },
};
