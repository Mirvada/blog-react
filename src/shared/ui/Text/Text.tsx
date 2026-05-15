import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Text.module.scss';

type TextTheme = 'primary' | 'error';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo(function Text(props: TextProps) {
  const {
    className,
    title,
    text,
    theme = 'primary',
  } = props;

  return (
    <div
      className={cn('', s[theme], className)}
    >
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
