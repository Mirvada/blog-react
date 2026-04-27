import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib/cn';
import { ButtonTheme, ButtonSize } from './types';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    size = 'sizeM',
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [s[theme]]: true,
    [s.square]: square,
    [s[size]]: true,
  };

  return (
    <button
      type="button"
      className={cn(
        s.button,
        mods,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
