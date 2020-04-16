import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import AppEnvironmentDecorator from './environmentDecorator';

addDecorator(AppEnvironmentDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
