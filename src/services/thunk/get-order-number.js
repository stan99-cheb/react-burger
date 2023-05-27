import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../utils/api";

export const getOrderNumber = createAsyncThunk(
  'order/fetch',
  async (idIngredients, { rejectWithValue }) => {
    try {
      const response = await api.request('/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: idIngredients
        }),
      });
      return response;
    } catch (err) {
      console.log(err)
      return rejectWithValue(err);
    };
  },
);
