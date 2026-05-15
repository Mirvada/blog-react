import { cn } from 'shared/lib/cn';
import s from './Profile.module.scss';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
  return (
    <div
      className={cn(s.profile, className)}
    // eslint-disable-next-line i18next/no-literal-string
    >
      Profile
    </div>
  );
};
