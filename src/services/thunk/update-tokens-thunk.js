import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { BASE_URL } from "../../utils/constants";
import { loginUser } from "../slices/user-slice";

export const updateTokensThunk = createAsyncThunk(
  'user/updateToken',
  async (refreshToken, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.updateTokens(BASE_URL, refreshToken);
      const data = await response.json();
      if (data.success) {
        dispatch(loginUser(data));
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
