import { ReactNode, useCallback, useEffect, useState } from 'react';
import { cn } from 'shared/lib/cn';
import { Portal } from '../Portal/Portal';
import s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  const mods = {
    [s.opened]: isOpen,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen && !isMounted) {
      // eslint-disable-next-line
      setIsMounted(true);
    }
  }, [isOpen, isMounted]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div
        className={cn(s.modal, className, mods)}
      >
        <div
          className={s.overlay}
          onClick={closeHandler}
        >
          <div
            className={s.content}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
