import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeButton } from './types';

describe('Button', () => {
  test('test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
