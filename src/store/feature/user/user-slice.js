import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./login-thunk";
import { updateTokensThunk } from "./update-tokens-thunk";
import { getUserThunk } from "./get-user-thunk";

const initialState = {
  loginStatus: 'idle',
  updateTokenStatus: 'idle',
  getUsetStatus: 'idle',
  isAuth: false,
  user: {
    name: '',
    email: '',
  },
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loginStatus = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loginStatus = 'idle';
        state.isAuth = true;
        if (payload.user) state.user = payload.user;
        if (payload.accessToken) state.accessToken = payload.accessToken.split('Bearer ')[1];
        if (payload.refreshToken) localStorage.setItem('refreshToken', payload.refreshToken);
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.loginStatus = 'failed';
        state.isAuth = false;
        state.user = {};
        state.accessToken = null;
        localStorage.removeItem('refreshToken');
      })
      .addCase(updateTokensThunk.pending, (state) => {
        state.updateTokenStatus = 'loading';
      })
      .addCase(updateTokensThunk.fulfilled, (state, { payload }) => {
        state.updateTokenStatus = 'idle';
        if (payload.accessToken) state.accessToken = payload.accessToken.split('Bearer ')[1];
        if (payload.refreshToken) localStorage.setItem('refreshToken', payload.refreshToken);
      })
      .addCase(updateTokensThunk.rejected, (state, { payload }) => {
        state.updateTokenStatus = 'failed';
      })
      .addCase(getUserThunk.pending, (state) => {
        state.getUsetStatus = 'loading';
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.getUsetStatus = 'idle';
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.getUsetStatus = 'failed';
        console.log(payload)
      })
  }
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const userState = (state) => state.user;