import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i.pinimg.com/736x/f6/60/a8/f660a85dd350ba9be384073af7d70e7a.jpg',
    alt: 'Котик',
  },
};

export const NotFountImg: Story = {
  args: {
    src: '',
    alt: 'Котик',
  },
};

export const SmallImg: Story = {
  args: {
    src: 'https://i.pinimg.com/736x/f6/60/a8/f660a85dd350ba9be384073af7d70e7a.jpg',
    alt: 'Котик',
    size: 50,
  },
};
