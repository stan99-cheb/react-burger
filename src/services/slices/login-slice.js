import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../../store/feature/user/login-thunk";

const initialState = {
  status: 'idle',
  success: false,
};

const loginSlice = createSlice({
  name: 'user/login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.status = 'idle';
        state.success = true;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        console.log(payload);
      })
  },
});

// export const {} = loginSlice.actions;
export const statusState = (state) => state.status;
export default loginSlice.reducer;
