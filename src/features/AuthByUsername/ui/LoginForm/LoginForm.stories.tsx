import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { withStoreProvider } from 'shared/config/storybook/withStoreProvider';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [withStoreProvider],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: () => false,
  },
};

export const WithPrefilled: Story = {
  parameters: {
    storeState: {
      loginForm: {
        username: 'test',
        password: '123',
      },
    },
  },
  args: {
    onSuccess: () => false,
  },
};

export const WithError: Story = {
  parameters: {
    storeState: {
      loginForm: { error: 'Вы ввели неверный логин или пароль' },
    },
  },
  args: {
    onSuccess: () => false,
  },
};

export const Loading: Story = {
  parameters: {
    storeState: {
      loginForm: { isLoading: true },
    },
  },
  args: {
    onSuccess: () => false,
  },
};
