import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { cn } from 'shared/lib/cn';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeLastName?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  const mods = {
    [s.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        className={cn(s.profileCard, s.loading, className)}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(s.profileCard, s.error, className)}
      >
        <Text
          title={t('ERROR_TITLE')}
          text={t('ERROR_TEXT')}
          theme="error"
          align="center"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(s.profileCard, mods, className)}
    >
      <div>
        {data?.avatar && (
          <div className={s.avatarWrapper}>
            <Avatar
              src={data?.avatar}
              alt={data?.username}
              size={50}
            />
          </div>
        )}
        <Input
          className={s.input}
          id="firstName"
          name="firstName"
          value={data?.firstName}
          onChange={onChangeFirstName}
          placeholder={t('NAME')}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          id="lastName"
          name="lastName"
          value={data?.lastName}
          onChange={onChangeLastName}
          placeholder={t('LAST_NAME')}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          id="age"
          name="age"
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('AGE')}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          id="city"
          name="city"
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('CITY')}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          id="username"
          name="username"
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('USERNAME')}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          id="avatar"
          name="avatar"
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t('AVATAR')}
          readOnly={readOnly}
        />
        <CurrencySelect
          className={s.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readOnly}
        />
        <CountrySelect
          className={s.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readOnly}
        />
      </div>
    </div>
  );
};
