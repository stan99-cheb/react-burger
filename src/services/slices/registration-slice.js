import { createSlice } from "@reduxjs/toolkit";
import { registrationThunk } from "../thunk/registration-thunk";

const initialState = {
  status: 'idle',
  success: false,
};

const registrationSlice = createSlice({
  name: 'user/registration',
  initialState: initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(registrationThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registrationThunk.fulfilled, (state) => {
        state.status = 'idle';
        state.success = true;
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.success = false;
        console.log(payload);
      })
  },
});

// export const {} = registrationSlice.actions;
export const statusState = (state) => state.status;
export default registrationSlice.reducer;
