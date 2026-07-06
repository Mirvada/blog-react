import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';
import { Page } from 'shared/ui/Page/Page';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('notFound');
  return (
    <Page
      className={cn(s.notFoundPage, className)}
    >
      {t('notFound')}
    </Page>
  );
};
