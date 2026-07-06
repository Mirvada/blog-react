import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const itemList = useMemo(() => sidebarItemsList.map(item => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <menu
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
        {itemList}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
