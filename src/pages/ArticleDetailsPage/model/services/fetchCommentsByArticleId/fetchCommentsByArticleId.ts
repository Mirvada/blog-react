import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import i18n from 'shared/config/i18n/i18n';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, ThunkApi) => {
    const {
      extra,
      rejectWithValue,
    } = ThunkApi;

    if (!articleId) return rejectWithValue('error');

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t(['authError']));
    }
  },
);
