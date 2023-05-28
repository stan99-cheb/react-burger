import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
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
  reducers: {
    loginUser(state, { payload }) {
      state.isAuth = true;
      if (payload.user) state.user = payload.user;
      if (payload.accessToken) state.accessToken = payload.accessToken.split('Bearer ')[1];
      if (payload.refreshToken) localStorage.setItem('refreshToken', payload.refreshToken);
    },
    logoutUser(state) {
      state.isAuth = false;
      state.user = {};
      state.accessToken = null;
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userState = (state) => state.user;
export default userSlice.reducer;
