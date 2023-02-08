import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginApi } from 'api/app-api';
import { localStorageService } from 'utils/localStorageService';

export const signIn = createAsyncThunk(
  'signIn',
  async (_, thunkApi) => {
    try {
      const response: any = await loginApi.signIn();
      localStorageService.setToken(response.records.sessionKey);
      console.log(response); // blocked by CORS policy

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue('sign in failed');
    }
  },
);
