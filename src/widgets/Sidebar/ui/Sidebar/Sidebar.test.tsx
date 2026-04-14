import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
