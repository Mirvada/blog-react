import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { cn } from 'shared/lib/cn';
import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('translation');

  return (
    <div
      className={cn(s.loginForm, className)}
    >
      <Input
        className={s.input}
        placeholder={t('placeholder.username')}
        autofocus
      />
      <Input className={s.input} placeholder={t('placeholder.password')} />
      <Button className={s.submitBtn}>{t('login')}</Button>
    </div>
  );
};
