import { Decorator } from '@storybook/react-webpack5';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';

export const withStoreProvider: Decorator = (Story, context) => {
  const state = context.parameters.storeState as DeepPartial<StateSchema> | undefined;

  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
};
