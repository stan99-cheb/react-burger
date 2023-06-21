import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./login-thunk";
import { updateTokensThunk } from "./update-tokens-thunk";
import { getUserThunk } from "./get-user-thunk";
import { registrationThunk } from "./registration-thunk";
import { forgotPasswordThunk } from "./forgot-password-thunk";
import { resetPasswordThunk } from "./reset-password-thunk";
import { updateUserThunk } from "./update-user-thunk";

const initialState = {
  loginStatus: 'idle',
  updateUserState: 'idle',
  updateTokenStatus: 'idle',
  getUsetStatus: 'idle',
  registrationStatus: 'idle',
  forgotPasswordStatus: 'idle',
  resetPasswordStatus: 'idle',
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

      .addCase(updateUserThunk.pending, (state) => {
        state.updateUserState = 'loading';
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.updateUserState = 'idle';
        state.user = payload.user;
        console.log(payload);
      })
      .addCase(updateUserThunk.rejected, (state, { payload }) => {
        state.updateUserState = 'failed';
        console.log(payload);
      })

      .addCase(updateTokensThunk.pending, (state) => {
        state.updateTokenStatus = 'loading';
      })
      .addCase(updateTokensThunk.fulfilled, (state, { payload }) => {
        state.updateTokenStatus = 'idle';
        state.isAuth = true;
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

      .addCase(registrationThunk.pending, (state) => {
        state.registrationStatus = 'loading';
      })
      .addCase(registrationThunk.fulfilled, (state, { payload }) => {
        state.registrationStatus = 'idle';
        console.log(payload);
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.registrationStatus = 'failed';
        console.log(payload);
      })

      .addCase(forgotPasswordThunk.pending, (state) => {
        state.forgotPasswordStatus = 'loading';
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, { payload }) => {
        state.forgotPasswordStatus = 'idle';
      })
      .addCase(forgotPasswordThunk.rejected, (state, { payload }) => {
        state.forgotPasswordStatus = 'failed';
        console.log(payload);
      })

      .addCase(resetPasswordThunk.pending, (state) => {
        state.resetPasswordStatus = 'loading';
      })
      .addCase(resetPasswordThunk.fulfilled, (state, { payload }) => {
        state.resetPasswordStatus = 'idle';
      })
      .addCase(resetPasswordThunk.rejected, (state, { payload }) => {
        state.resetPasswordStatus = 'failed';
        console.log(payload);
      })
  }
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const userState = (state) => state.user;