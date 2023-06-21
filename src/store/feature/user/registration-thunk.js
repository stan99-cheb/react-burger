import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/api";

export const registrationThunk = createAsyncThunk(
  'user/registration',
  async (formField, { rejectWithValue }) => {
    try {
      const result = await api.request('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": formField.email,
          "password": formField.password,
          "name": formField.name,
        }),
      });
      return result;
    } catch (err) {
      return rejectWithValue(err);
    };
  }
);
