import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

import '@testing-library/jest-dom';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const value = screen.getByTestId('value');
    expect(value).toHaveTextContent('10');
  });

  test('test increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const value = screen.getByTestId('value');
    const incrementBtn = screen.getByTestId('increment-btn');
    expect(value).toBeInTheDocument();
    fireEvent.click(incrementBtn);
    expect(value).toHaveTextContent('11');
  });

  test('test decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const value = screen.getByTestId('value');
    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(value).toBeInTheDocument();
    fireEvent.click(decrementBtn);
    expect(value).toHaveTextContent('9');
  });
});
