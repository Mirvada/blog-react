import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { cn } from 'shared/lib/cn';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to="/">{t('mainPage')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('aboutPage')}</AppLink>
      </div>

    </div>
  );
};
