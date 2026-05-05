import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { cn } from 'shared/lib/cn';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={cn(s.navbar, className)}>
      <div className={s.links}>
        <Button
          theme="clearInverted"
          onClick={onToggleModal}
        >
          {t('login')}
        </Button>
      </div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Natus, necessitatibus!
      </Modal>
    </div>
  );
};
