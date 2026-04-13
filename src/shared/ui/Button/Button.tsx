import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib/cn';
import { ThemeButton } from './types';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props;
  return (
    <button
      type="button"
      className={cn(s.button, s[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
