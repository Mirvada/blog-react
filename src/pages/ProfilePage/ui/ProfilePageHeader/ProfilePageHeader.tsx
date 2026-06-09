import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { cn } from 'shared/lib/cn';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import s from './ProfilePageHeader.module.scss';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div
      className={cn(s.profilePageHeader, className)}
    >
      <Text title={t('PROFILE')} />
      {canEdit && (
        <>
          {readOnly
            ? (
              <Button
                className={s.editBtn}
                theme="outline"
                onClick={onEdit}
              >
                {t('EDIT')}
              </Button>
            )
            : (
              <>
                <Button
                  className={s.editBtn}
                  theme="outlineRed"
                  onClick={onCancelEdit}
                >
                  {t('CANCEL')}
                </Button>
                <Button
                  theme="outline"
                  onClick={onSave}
                >
                  {t('SAVE')}
                </Button>
              </>
            )}
        </>
      )}
    </div>
  );
};
