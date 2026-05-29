import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div
      className={cn(s.articleDetailsPage, className)}
    >
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
