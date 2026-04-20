import { ReactNode, Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

interface I18nProviderWrapperProps {
  children: ReactNode;
  locale: string;
}

const I18nProviderWrapper = ({ children, locale }: I18nProviderWrapperProps) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Suspense>
  );
};

export default I18nProviderWrapper;
