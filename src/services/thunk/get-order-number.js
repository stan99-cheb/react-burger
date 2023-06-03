import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";

export const getOrderNumber = createAsyncThunk(
  'order/fetch',
  async ({ idIngredients, accessToken }, { rejectWithValue }) => {
    try {
      const response = await api.request('/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          ingredients: idIngredients
        }),
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    };
  },
);
