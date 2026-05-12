import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData';
import type { User, UserSchema } from './model/types/userSchema';

export {
  userActions,
  userReducer,
  getUserAuthData,
};

export type { User, UserSchema };
