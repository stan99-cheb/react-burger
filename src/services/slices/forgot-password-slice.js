import { createSlice } from "@reduxjs/toolkit";
import { forgotPasswordThunk } from "../thunk/forgot-password-thunk";

const initialState = {
  status: 'idle',
  success: false,
  message: null,
};

const forgotPasswordSlice = createSlice({
  name: 'user/forgotPassword',
  initialState: initialState,
  reducers: {
    eraseState(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.success = true;
        state.message = payload;
      })
      .addCase(forgotPasswordThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        console.log(payload);
      })
  },
});

export const { eraseState } = forgotPasswordSlice.actions;
export const forgotPasswordState = (state) => state.forgotPassword;
export default forgotPasswordSlice.reducer;