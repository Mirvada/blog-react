import type { Meta } from '@storybook/react-webpack5';

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

export const OpenLightTheme = Modal.bind({});
OpenLightTheme.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
  isOpen: true,
  className: 'light',
};

export const OpenDarkTheme = Modal.bind({});
OpenDarkTheme.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
  isOpen: true,
  className: 'dark',
};

export const Closed = Modal.bind({});
Closed.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus',
  isOpen: false,
};
