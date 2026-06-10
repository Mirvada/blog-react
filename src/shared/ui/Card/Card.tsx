import { HTMLAttributes, memo, ReactNode } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo(function Card(props: CardProps) {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div
      className={cn(s.card, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
});
