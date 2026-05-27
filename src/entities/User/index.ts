import { userActions, userReducer } from './model/slice/userSlice';
import { getUserInitiated } from './model/selector/getUserInitiated/getUserInitiated';
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData';
import type { User, UserSchema } from './model/types/userSchema';

export {
  userActions,
  userReducer,
  getUserAuthData,
  getUserInitiated,
};

export type { User, UserSchema };
