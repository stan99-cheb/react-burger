import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await api.request('/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "token": refreshToken,
        }),
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
