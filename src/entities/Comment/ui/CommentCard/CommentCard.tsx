import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { cn } from 'shared/lib/cn';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard(props: CommentCardProps) {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div
        className={cn(s.commentCard, s.loading, className)}
      >
        <div className={s.header}>
          <Skeleton
            border="50%"
            width={30}
            height={30}
          />
          <Skeleton
            className={s.username}
            height={32}
            width={100}
          />
        </div>
        <Skeleton
          className={s.text}
          height={48}
          width="100%"
        />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div
      className={cn(s.commentCard, className)}
    >
      <AppLink
        to={`${RouterPath.profile}/${comment.user.id}`}
        className={s.header}
      >
        {
          comment.user.avatar
            ? (
              <Avatar
                src={comment.user.avatar}
                size={30}
              />
            )
            : null
        }
        <Text
          className={s.username}
          title={comment.user.username}
        />
      </AppLink>
      <Text
        className={s.text}
        text={comment.text}
      />
    </div>
  );
});
