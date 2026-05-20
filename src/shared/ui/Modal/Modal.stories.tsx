import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const OpenLightTheme: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
    isOpen: true,
    className: 'light',
  },
};

export const OpenDarkTheme: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
    isOpen: true,
    className: 'dark',
  },
};

export const Closed: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
    isOpen: false,
  },
};
