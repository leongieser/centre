import type { Preview } from '@storybook/react';
import "./../src/app/globals.css"
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { customViewports } from './viewports';

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    viewport: {
      viewports: {
        // ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
      defaultViewport: 'iphone14promax',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
