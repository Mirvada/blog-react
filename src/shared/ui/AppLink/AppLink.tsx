import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router';
import { cn } from 'shared/lib/cn';
import { AppLinkTheme } from './types';
import s from './AppLink.module.scss';
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

  return (
    <Link
      className={cn(s.appLink, s[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
