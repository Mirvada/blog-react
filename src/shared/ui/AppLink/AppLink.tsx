import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router';
import { cn } from 'shared/lib/cn';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const { 
    to, 
    className, 
    children, 
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  console.log(cls.appLink);

  return (
    <Link 
      className={cn(cls.appLink, cls[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
 