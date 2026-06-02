import { memo } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { cn } from 'shared/lib/cn';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string; }>();

  if (!id) {
    return (
      <div
        className={cn(s.articleDetailsPage, className)}
      >
        {t('articleNotFound')}
      </div>
    );
  }

  return (
    <div
      className={cn(s.articleDetailsPage, className)}
    >
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
