import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import { cn } from 'shared/lib/cn';
import { ArticleView } from '../../model/types/article';
import s from './ArticleListItemSkeleton.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItem(props: ArticleListItemSkeletonProps) {
  const {
    className,
    view,
  } = props;

  if (view === 'list') {
    return (
      <div
        className={cn('', s[view], className)}
      >
        <Card>
          <div className={s.header}>
            <Skeleton
              width={30}
              height={30}
              border="50%"
            />
            <Skeleton
              className={s.username}
              width={150}
              height={16}
            />
            <Skeleton
              className={s.date}
              width={150}
              height={16}
            />
          </div>
          <Skeleton
            className={s.title}
            width={250}
            height={24}
          />
          <Skeleton
            className={s.img}
            height={200}
          />
          <div className={s.footer}>
            <Skeleton
              width={200}
              height={36}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={cn('', s[view], className)}
    >
      <Card>
        <div className={s.imageWrapper}>
          <Skeleton
            className={s.img}
            width={200}
            height={200}
          />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
          />
        </div>
        <Skeleton
          className={s.title}
          width={150}
          height={16}
        />
      </Card>
    </div>
  );
});
