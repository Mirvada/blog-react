import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { cn } from 'shared/lib/cn';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(function ArticleListItem(props: ArticleListItemProps) {
  const {
    className,
    article,
    view,
  } = props;

  const { t } = useTranslation('article-details');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RouterPath.articles_details + article.id);
  }, [navigate, article.id]);

  if (view === 'row') {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div
        className={cn('', s[view], className)}
      >
        <Card>
          <div className={s.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              className={s.username}
              text={article.user.username}
            />
            <Text
              className={s.date}
              text={article.createdAt}
            />
          </div>
          <Text
            className={s.title}
            title={article.title}
          />
          <Text
            className={s.types}
            text={article.type.join(', ')}
          />
          <img
            className={s.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={s.textBlock}
              block={textBlock}
            />
          )}
          <div className={s.footer}>
            <Button
              theme="outline"
              onClick={onOpenArticle}
            >
              {t('readMore')}
            </Button>
            <Text
              className={s.views}
              text={String(article.views)}
            />
            <Icon Svg={EyeIcon} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={cn('', s[view], className)}
    >
      <Card onClick={onOpenArticle}>
        <div className={s.imageWrapper}>
          <img
            className={s.img}
            src={article.img}
            alt={article.title}
          />
          <Text
            text={article.createdAt}
            className={s.date}
          />
        </div>
        <div className={s.infoWrapper}>
          <Text
            className={s.types}
            text={article.type.join(', ')}
          />
          <Text
            className={s.views}
            text={String(article.views)}
          />
          <Icon Svg={EyeIcon} />
        </div>
        <Text
          className={s.title}
          text={article.title}
        />
      </Card>
    </div>
  );
});
