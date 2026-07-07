import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { cn } from 'shared/lib/cn';

import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo(function ArticleDetails({ className, id }: ArticleDetailsProps) {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
  };

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            className={s.block}
            key={block.id}
            block={block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            className={s.block}
            key={block.id}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            className={s.block}
            key={block.id}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={s.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton
          className={s.title}
          width={300}
          height={32}
        />
        <Skeleton
          className={s.skeleton}
          width={600}
          height={24}
        />
        <Skeleton
          className={s.skeleton}
          width="100%"
          height={200}
        />
        <Skeleton
          className={s.skeleton}
          width="100%"
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('error')}
        theme="error"
        align="center"
      />
    );
  } else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar
            className={s.avatar}
            size={200}
            src={article?.img}
          />
        </div>
        <Text
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size="sizeL"
        />
        <div className={s.articleInfo}>
          <Icon
            className={s.icon}
            Svg={EyeIcon}
          />
          <Text text={String(article?.views)} />
        </div>
        <div className={s.articleInfo}>
          <Icon
            className={s.icon}
            Svg={CalendarIcon}
          />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div
        className={cn(s.articleDetails, className)}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
