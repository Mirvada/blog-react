import { cn } from 'shared/lib/cn';
import s from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div
      className={cn(s.pageLoader, className)}
    >
      <Loader />
    </div>
  );
};
