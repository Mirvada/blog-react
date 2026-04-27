import { cn } from 'shared/lib/cn';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(s.navbar, className)}>
      <div className={s.links} />
    </div>
  );
};
