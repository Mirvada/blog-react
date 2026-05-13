import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { cn } from 'shared/lib/cn';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginAction, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import s from './LoginForm.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();

  const username = useAppSelector(getLoginUsername);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginLoading);
  const error = useAppSelector(getLoginError);

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
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
