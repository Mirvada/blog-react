import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(s.articlesPage, className)}
    >
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
