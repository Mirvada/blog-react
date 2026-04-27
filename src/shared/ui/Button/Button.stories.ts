import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
    size: 'sizeL',
  },
};

export const OutlineSizeXl: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
    size: 'sizeXl',
  },
};

export const Background: Story = {
  args: {
    children: 'Button',
    theme: 'background',
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Button',
    theme: 'backgroundInverted',
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    square: true,
    theme: 'backgroundInverted',
    size: 'sizeL',
    children: '>',
  },
};

export const SquareSizeXl: Story = {
  args: {
    square: true,
    theme: 'backgroundInverted',
    size: 'sizeXl',
    children: '>',
  },
};
