import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ErrorFallback } from './ErrorFallback';

const meta = {
  title: 'widgets/ErrorFallback',
  component: ErrorFallback,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {
    error: { message: 'error' },
    resetErrorBoundary: () => console.log('click'),
  },
};
