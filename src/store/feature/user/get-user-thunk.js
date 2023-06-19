import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const getUserThunk = createAsyncThunk(
  'user/get',
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await api.request('/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        },
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
