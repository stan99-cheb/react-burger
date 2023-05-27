import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordThunk } from "../thunk/reset-password-thunk";

const initialState = {
  status: 'idle',
  success: false,
  message: null,
};

const resetPasswordSlice = createSlice({
  name: 'user/resetPassword',
  initialState: initialState,
  reducers: {
    eraseState(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: build => {
    build
      .addCase(resetPasswordThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPasswordThunk.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.success = true;
        state.message = payload.message;
      })
      .addCase(resetPasswordThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        console.log(payload);
      })
  },
});

export const { eraseState } = resetPasswordSlice.actions;
export const resetPasswordState = (state) => state.resetPassword;
export default resetPasswordSlice.reducer;
