import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const updateTokensThunk = createAsyncThunk(
  'token/update',
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await api.request('/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "token": refreshToken
        }),
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
