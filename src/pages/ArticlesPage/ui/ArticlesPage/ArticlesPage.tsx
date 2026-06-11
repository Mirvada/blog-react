import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { cn } from 'shared/lib/cn';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div
        className={cn('', className)}
      >
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
