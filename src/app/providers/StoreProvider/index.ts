import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema } from './config/StateSchema';
import { useAppDispatch, useAppSelector } from './lib/hooks/useAppDispatch';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  useAppDispatch,
  useAppSelector,
};
