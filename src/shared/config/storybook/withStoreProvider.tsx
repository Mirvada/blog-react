import { Decorator } from '@storybook/react-webpack5';
import { StoreProvider } from 'app/providers/StoreProvider';

export const withStoreProvider: Decorator = Story => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
