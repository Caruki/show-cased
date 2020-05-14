import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import AppEnvironmentDecorator from './environmentDecorator';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

addDecorator(AppEnvironmentDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
