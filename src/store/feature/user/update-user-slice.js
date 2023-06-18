import { createSlice } from "@reduxjs/toolkit";
import { updateUserThunk } from "./update-user-thunk";

const initialState = {
  status: 'idle',
  success: false,
  message: null,
};

const updateUserSlice = createSlice({
  name: 'user/update',
  initialState: initialState,
  reducers: {
    eraseState(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(updateUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.status = 'idle';
        state.success = true;
      })
      .addCase(updateUserThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        state.message = payload;
      })
  }
});

export const { eraseState } = updateUserSlice.actions;
export const updateUsersState = (state) => state.updateUser;
export default updateUserSlice.reducer;
