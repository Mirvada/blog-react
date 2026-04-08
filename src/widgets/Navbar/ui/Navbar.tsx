import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { cn } from 'shared/lib/cn';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={cn(s.navbar, className)}>
      <div className={s.links}>
        <AppLink className={s.mainLink} theme={AppLinkTheme.SECONDARY} to="/">
          {t('mainPage')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('aboutPage')}
        </AppLink>
      </div>

    </div>
  );
};
