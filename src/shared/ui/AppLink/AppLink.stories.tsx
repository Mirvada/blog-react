import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { AppLink } from './AppLink';
import { AppLinkTheme } from './types';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Главная',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Главная',
    theme: AppLinkTheme.SECONDARY,
  },
};
