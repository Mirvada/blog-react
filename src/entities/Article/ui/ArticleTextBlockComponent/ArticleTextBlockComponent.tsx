import { memo } from 'react';
import { cn } from 'shared/lib/cn';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
    const { className, block } = props;

    return (
      <div
        className={cn('', className)}
      >
        {block.title && (
          <Text
            className={s.title}
            title={block.title}
          />
        )}

        {block.paragraphs.map((paragraph, index) => (
          <Text
            className={s.paragraph}
            key={index}
            text={paragraph}
          />
        ))}
      </div>
    );
  },
);
