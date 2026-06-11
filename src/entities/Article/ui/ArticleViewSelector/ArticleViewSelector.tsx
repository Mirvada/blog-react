import { FC, memo, SVGProps } from 'react';
import { ArticleView } from 'entities/Article';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { cn } from 'shared/lib/cn';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

interface ViewTypes {
  view: ArticleView;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewTypes[] = [
  {
    view: 'tiled',
    icon: TiledIcon,
  },
  {
    view: 'list',
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(function ArticleViewSelector(props: ArticleViewSelectorProps) {
  const {
    className,
    view,
    onViewClick,
  } = props;

  return (
    <div
      className={cn('', className)}
    >
      {viewTypes.map(viewType => (
        <Button
          key={viewType.view}
          theme="clear"
          onClick={() => onViewClick?.(viewType.view)}
        >
          <Icon
            className={cn('', viewType.view === view && s.selected)}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
