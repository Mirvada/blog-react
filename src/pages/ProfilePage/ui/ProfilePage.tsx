import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/cn';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div
        className={cn('', className)}
      >
        {t('profilePage')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
