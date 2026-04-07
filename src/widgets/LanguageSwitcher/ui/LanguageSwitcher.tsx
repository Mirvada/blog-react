import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Button, ThemeButton } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t } = useTranslation('sidebar');

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cn(className)}
      onClick={toggleLanguage}
    >
      {t('langToggle')}
    </Button>
  );
};
