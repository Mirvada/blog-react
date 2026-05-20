import { Reducer } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react-webpack5';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUsername';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers = {
  loginForm: loginReducer as Reducer<LoginSchema | undefined>,
};

export const withStoreProvider: Decorator = (Story, context) => {
  const state = context.parameters.storeState as DeepPartial<StateSchema> | undefined;

  return (
    <StoreProvider
      initialState={state}
      asyncReducers={defaultAsyncReducers}
    >
      <Story />
    </StoreProvider>
  );
};
