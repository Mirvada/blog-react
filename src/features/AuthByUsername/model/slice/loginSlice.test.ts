import { LoginSchema } from '../types/loginSchema';
import { loginAction, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(
      state as LoginSchema,
      loginAction.setUsername('user'),
    )).toEqual({ username: 'user' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
      state as LoginSchema,
      loginAction.setPassword('321'),
    )).toEqual({ password: '321' });
  });
});
