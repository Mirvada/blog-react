import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { cn } from 'shared/lib/cn';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import s from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList(props: CommentListProps) {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation();

  return (
    <div
      className={cn(s.commentList, className)}
    >
      {comments?.length
        ? comments.map(comment => (
          <CommentCard
            className={s.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('commentsNotFound')} />}
    </div>
  );
});
