import type { Preview } from '@storybook/react-webpack5';
import { withThemes } from '../../src/shared/config/storybook/withThemes';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { withRouter } from '../../src/shared/config/storybook/withRouter';
import { withI18next } from '../../src/shared/config/storybook/withI18next/withI18next';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: Theme.LIGHT,
      toolbar: {
        icon: 'circlehollow',
        items: [
          {
            value: Theme.LIGHT,
            icon: 'sun',
            title: 'Light',
          },
          {
            value: Theme.DARK,
            icon: 'moon',
            title: 'Dark',
          },
        ],
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'ru',
      toolbar: {
        icon: 'globe',
        items: [
          {
            value: 'en',
            title: 'English',
          },
          {
            value: 'ru',
            title: 'Русский',
          },
        ],
      },
    },
  },
  decorators: [withThemes, withI18next, withRouter],
};

export default preview;
