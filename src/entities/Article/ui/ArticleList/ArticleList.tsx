import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === 'tiled' ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton
        className={s.card}
        key={index}
        view={view}
      />
    ));
};

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const {
    className,
    articles,
    isLoading,
    view = 'tiled',
  } = props;

  if (isLoading) {
    return (
      <div className={cn('', s[view], className)}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div
      className={cn('', s[view], className)}
    >
      {articles.length > 0
        ? articles.map(article => (
          <ArticleListItem
            className={s.card}
            key={article.id}
            article={article}
            view={view}
          />
        ))
        : null}
    </div>
  );
});
