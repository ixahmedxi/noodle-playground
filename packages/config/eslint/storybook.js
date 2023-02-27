/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:storybook/recommended',
    'plugin:storybook/csf-strict',
    'plugin:storybook/csf',
  ],
  rules: {
    'storybook/no-title-property-in-meta': 'off',
  },
};
