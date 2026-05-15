import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = memo(function Loader({ className }: LoaderProps) {
  return (
    <div
      className={cn(s.ldsEllipsis, className)}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
