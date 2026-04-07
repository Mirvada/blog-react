import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { cn } from 'shared/lib/cn';
import cls from './Sidebar.module.scss';
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
      className={cn(cls.sidebar, collapsed && cls.collapsed, className)}
    >
      <button type="button" onClick={onToggle}>
        {t('sidebarToggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
