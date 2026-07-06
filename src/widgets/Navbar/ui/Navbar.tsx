import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { Button } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';
import s from './Navbar.module.scss';
import { useSelector } from 'react-redux';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={cn(s.navbar, className)}>
        <Button
          className={s.authBtn}
          theme="clearInverted"
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </header>
    );
  }

  return (
    <header className={cn(s.navbar, className)}>
      <Button
        className={s.authBtn}
        theme="clearInverted"
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
};
