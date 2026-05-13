import { Decorator } from '@storybook/react-webpack5';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers = {
  loginForm: loginReducer,
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
