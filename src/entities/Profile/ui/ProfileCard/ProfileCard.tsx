import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/cn';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);

  return (
    <div
      className={cn(s.profileCard, className)}
    >
      <div className={s.header}>
        <Text title={t('PROFILE')} />
        <Button
          className={s.editBtn}
          theme="outline"
        >
          {t('EDIT')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          className={s.input}
          value={data?.firstName}
          placeholder={t('NAME')}
        />
        <Input
          className={s.input}
          value={data?.lastName}
          placeholder={t('LAST_NAME')}
        />
      </div>
    </div>
  );
};
