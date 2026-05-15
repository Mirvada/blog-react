import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Button } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';
import { memo } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(function LanguageSwitcher({ className, short }: LanguageSwitcherProps) {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      className={cn(className)}
      onClick={toggleLanguage}
    >
      {t(short ? 'shortLang' : 'lang')}
    </Button>
  );
});
