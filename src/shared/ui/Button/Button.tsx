import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib/cn';
import { ThemeButton } from './types';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      type="button"
      className={cn(cls.button, cls[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
