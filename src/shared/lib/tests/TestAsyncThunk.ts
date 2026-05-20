import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue; }>;

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
  // eslint-disable-next-line
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  api: jest.Mocked<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate,
      },
    );

    return result;
  }
}
