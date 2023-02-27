import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-tailwind-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
