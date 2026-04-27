import { cn } from 'shared/lib/cn';
import s from './ErrorFallback.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { FallbackProps } from 'react-error-boundary';

interface PageErrorProps extends FallbackProps {
  className?: string;
}

export const ErrorFallback = ({
  className,
  error,
  resetErrorBoundary,
}: PageErrorProps) => {
  const { t } = useTranslation('error');

  return (
    <div
      className={cn(s.errorFallback, className)}
    >
      <p>
        {t('fallback.title')}
      </p>
      <pre>{error instanceof Error ? error.message : t('fallback.error')}</pre>
      <Button onClick={resetErrorBoundary}>{t('fallback.button')}</Button>
    </div>
  );
};
