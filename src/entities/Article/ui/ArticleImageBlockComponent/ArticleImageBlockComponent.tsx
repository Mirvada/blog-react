import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { cn } from 'shared/lib/cn';
import { ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  function ArticleImageBlockComponent(props: ArticleImageBlockComponentProps) {
    const { className, block } = props;

    return (
      <div
        className={cn('', className)}
      >
        <img
          className={s.img}
          src={block.src}
          alt={block.title}
        />
        {block.title && (
          <Text
            text={block.title}
            align="center"
          />
        )}
      </div>
    );
  },
);
