import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";

export const getIngredients = createAsyncThunk(
  'ingredients/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return await api.request('/ingredients');
    } catch (err) {
      return rejectWithValue(err);
    };
  },
);
