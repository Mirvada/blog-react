import { userActions } from 'entities/User';
import type { User } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  const userValue: User = {
    username: '123',
    id: '1',
  };

  const thunk = new TestAsyncThunk(loginByUsername);

  // test('should login successfully', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

  //   const action = loginByUsername({
  //     username: 'admin',
  //     password: '123',
  //   });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('should login error', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //   const action = loginByUsername({
  //     username: 'admin',
  //     password: '123',
  //   });

  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('authError');
  // });

  test('should login successfully', async () => {
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('should login error', async () => {
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('authError');
  });
});
