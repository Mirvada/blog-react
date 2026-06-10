import { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { cn } from 'shared/lib/cn';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div
      className={cn('', className)}
    >
      <ArticleList
        articles={[]}
        view="grid"
        isLoading={false}
      />
    </div>
  );
};

export default memo(ArticlesPage);
