import { Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router';

export const withRouter: Decorator = Story => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
