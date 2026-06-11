import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
}
