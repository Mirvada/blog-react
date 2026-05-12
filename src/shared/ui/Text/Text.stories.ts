import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'onlyTitle',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'OnlyText',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    theme: 'error',
  },
};
