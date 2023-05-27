import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const resetPasswordThunk = createAsyncThunk(
  'user/resetPassword',
  async (formField, { rejectWithValue }) => {
    try {
      const result = await api.request('/password-reset/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "password": formField.password,
          "token": formField.token,
        }),
      });
      return result;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
