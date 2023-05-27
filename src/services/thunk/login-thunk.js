import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { loginUser } from "../slices/user-slice";

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formField, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.request('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": formField.email,
          "password": formField.password,
        }),
      });
      dispatch(loginUser(response));
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
