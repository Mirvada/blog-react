import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { cn } from 'shared/lib/cn';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  function ArticleCodeBlockComponent(props: ArticleCodeBlockComponentProps) {
    const { className, block } = props;

    return (
      <div
        className={cn('', className)}
      >
        <Code text={block.code} />
      </div>
    );
  },
);
