import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { Button } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useAppSelector(getUserAuthData);
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
      <div className={cn(s.navbar, className)}>
        <Button
          className={s.authBtn}
          theme="clearInverted"
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn(s.navbar, className)}>
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
    </div>
  );
};
