import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { addCommentFormReducer, addCommentFormAction } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button';
import { cn } from 'shared/lib/cn';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import s from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(function AddCommentForm({ className, onSendComment }: AddCommentFormProps) {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const initialReducer: ReducerList = {
    addCommentForm: addCommentFormReducer,
  };

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormAction.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange, text]);

  return (
    <DynamicModuleLoader
      reducers={initialReducer}
    >
      <div
        className={cn(s.addCommentForm, className)}
      >
        <Input
          className={s.input}
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('inputFormPlaceholder')}
        />
        <Button
          theme="outline"
          onClick={onSendHandler}
        >
          {t('addCommentBtn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
