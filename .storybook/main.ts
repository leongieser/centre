import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-measure'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
