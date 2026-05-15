import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginAction, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import s from './LoginForm.module.scss';
import { useSelector } from 'react-redux';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({ className, onSuccess }: LoginFormProps) {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({
      username,
      password,
    }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

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
