import { Decorator } from '@storybook/react-webpack5';
import I18nProviderWrapper from './I18nProviderWrapper';

export const withI18next: Decorator = (Story, context) => {
  const { locale } = context.globals;

  return (
    <I18nProviderWrapper locale={locale}><Story /></I18nProviderWrapper>
  );
};
