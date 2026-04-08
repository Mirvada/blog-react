import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { cn } from 'shared/lib/cn';
import s from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation('sidebar');
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={cn(s.sidebar, collapsed && s.collapsed, className)}
    >
      <button type="button" onClick={onToggle}>
        {t('sidebarToggle')}
      </button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={s.lang} />
      </div>
    </div>
  );
};
