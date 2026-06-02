import { memo } from 'react';
import { cn } from 'shared/lib/cn';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div
      className={cn('', className)}
    >
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
