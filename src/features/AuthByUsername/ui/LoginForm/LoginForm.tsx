import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { cn } from 'shared/lib/cn';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginAction } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useAppSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({
      username,
      password,
    }));
  }, [dispatch, username, password]);

  return (
    <div
      className={cn(s.loginForm, className)}
    >
      <Text title={t('authFormTitle')} />
      {error && (
        <Text
          text={error}
          theme="error"
        />
      )}
      <Input
        className={s.input}
        id="username"
        name="username"
        value={username}
        onChange={onChangeUsername}
        placeholder={t('placeholder.username')}
        autoComplete="username"
        autofocus
      />
      <Input
        className={s.input}
        id="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={onChangePassword}
        placeholder={t('placeholder.password')}
      />
      <Button
        className={s.submitBtn}
        theme="outline"
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});
