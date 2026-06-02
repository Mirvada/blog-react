import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon({ className, Svg }: IconProps) {
  return (
    <Svg
      className={cn(s.icon, className)}
    />
  );
});
