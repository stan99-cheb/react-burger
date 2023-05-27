import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";
import { BASE_URL } from '../../utils/constants';

export const getOrderNumber = createAsyncThunk(
  'order/fetch',
  async (idIngredients, { rejectWithValue }) => {
    try {
      const result = await api.getOrderNumber(BASE_URL, idIngredients);
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
