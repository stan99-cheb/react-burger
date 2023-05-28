import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { loginUser } from "../slices/user-slice";

export const updateTokensThunk = createAsyncThunk(
  'user/updateToken',
  async (refreshToken, { dispatch, rejectWithValue }) => {
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
      dispatch(loginUser(response));
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
