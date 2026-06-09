import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { cn } from 'shared/lib/cn';
import type { SidebarItemsType } from '../../model/types/sidebar';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemsType;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({ item, collapsed }: SidebarItemProps) {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
      className={cn(s.item, collapsed && s.collapsed)}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
