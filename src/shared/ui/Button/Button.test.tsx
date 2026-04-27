import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
