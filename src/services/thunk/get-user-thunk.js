import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { loginUser } from "../slices/user-slice";

export const getUserThunk = createAsyncThunk(
  'user/get',
  async (accessToken, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.request('/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        },
      });
      dispatch(loginUser(response));
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
