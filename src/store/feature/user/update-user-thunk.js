import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";
import { loginUser } from "../../../services/slices/user-slice";

export const updateUserThunk = createAsyncThunk(
  'user/update',
  async ({ accessToken, formField }, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.request('/auth/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify({
          "email": formField.email,
          "password": formField.password,
          "name": formField.name,
        }),
      });
      dispatch(loginUser(response));
    } catch (error) {
      return rejectWithValue(error.message);
    };
  }
);
