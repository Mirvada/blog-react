import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';
import { getCounter } from './model/selectors/getCounter/getCounter';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';

export {
  Counter,
  CounterSchema,
  counterReducer,
  getCounter,
  getCounterValue,
};
