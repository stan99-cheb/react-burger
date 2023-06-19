import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk } from "../../store/feature/user/get-user-thunk";

const initialState = {
  status: 'idle',
  success: false,
  message: null,
};

const getUserSlice = createSlice({
  name: 'user/get',
  initialState: initialState,
  reducers: {
    eraseState(state) {
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: build => {
    build
      .addCase(getUserThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserThunk.fulfilled, (state) => {
        state.status = 'idle';
        state.success = true;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        console.log(payload);
      })
  }
});

export const { eraseState } = getUserSlice.actions;
export const getUserState = (state) => state.getUser;
export default getUserSlice.reducer;
