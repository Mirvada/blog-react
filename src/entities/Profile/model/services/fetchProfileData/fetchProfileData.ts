import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import i18n from 'shared/config/i18n/i18n';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, ThunkApi) => {
    const {
      extra,
      rejectWithValue,
    } = ThunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');

      // if (!response.data) {
      //   throw new Error();
      // }

      return response.data;
    }
    catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t(['authError']));
    }
  },
);
