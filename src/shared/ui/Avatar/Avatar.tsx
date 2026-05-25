import { cn } from 'shared/lib/cn';
import s from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <img
      className={cn(s.avatar, className)}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};
