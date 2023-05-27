import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";
import { BASE_URL } from '../../utils/constants';

export const getIngredients = createAsyncThunk(
  'ingredients/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getIngredients(BASE_URL);
      const data = await result.json();
      if (result.ok) {
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
