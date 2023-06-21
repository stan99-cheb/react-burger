import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const forgotPasswordThunk = createAsyncThunk(
  'user/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const result = await api.request('/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email,
        }),
      });
      return result;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
