import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { Button } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { cn } from 'shared/lib/cn';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={cn(s.sidebar, collapsed && s.collapsed, className)}
    >
      <Button
        className={s.collapseBtn}
        data-testid="sidebar-toggle"
        type="button"
        square
        theme="backgroundInverted"
        size="sizeL"
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.items}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RouterPath.main}
          className={s.item}
        >
          <MainIcon className={s.icon} />
          <span className={s.link}>
            {t('mainPage')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RouterPath.about}
          className={s.item}
        >
          <AboutIcon className={s.icon} />
          <span className={s.link}>
            {t('aboutPage')}
          </span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
