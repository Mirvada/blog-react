import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { cn } from 'shared/lib/cn';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
          <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>

    </div>
  )
}
