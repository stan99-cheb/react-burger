import { createSlice } from "@reduxjs/toolkit";
import { updateTokensThunk } from "../thunk/update-tokens-thunk";

const initialState = {
  status: 'idle',
  success: false,
  message: null,
};

const updateTokensSlice = createSlice({
  name: 'user/updateTokens',
  initialState: initialState,
  reducers: {
    eraseState(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(updateTokensThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTokensThunk.fulfilled, (state) => {
        state.status = 'idle';
        state.success = true;
      })
      .addCase(updateTokensThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        state.message = payload;
      })
  },
});

export const { eraseState } = updateTokensSlice.actions;
export const updateTokensState = (state) => state.updateTokens;
export default updateTokensSlice.reducer;
