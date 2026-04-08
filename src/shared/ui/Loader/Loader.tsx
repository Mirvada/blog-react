import { cn } from 'shared/lib/cn';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
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
};
