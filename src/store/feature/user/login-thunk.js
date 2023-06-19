import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.request('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email,
          "password": password,
        }),
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
