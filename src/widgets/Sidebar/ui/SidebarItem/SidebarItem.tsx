import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import type { SidebarItemsType } from 'widgets/Sidebar/model/items';
import s from './SidebarItem.module.scss';
import { memo } from 'react';
import { cn } from 'shared/lib/cn';

interface SidebarItemProps {
  item?: SidebarItemsType;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({ item, collapsed }: SidebarItemProps) {
  const { t } = useTranslation();

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
