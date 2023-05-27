import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { BASE_URL } from "../../utils/constants";

export const resetPasswordThunk = createAsyncThunk(
  'user/resetPassword',
  async (formField, { rejectWithValue }) => {
    try {
      const result = await api.resetPassword(BASE_URL, formField);
      const data = await result.json();
      if (result.ok) {
        return data.message;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
