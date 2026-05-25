import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(function Text(props: TextProps) {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
  } = props;

  return (
    <div
      className={cn('', s[theme], s[align], className)}
    >
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
