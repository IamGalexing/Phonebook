import { createSlice } from '@reduxjs/toolkit';
import {
  authSignUp,
  authLogin,
  authLogOut,
  authCurrentUser,
} from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: false,
  },
  extraReducers: {
    [authSignUp.pending]: (state, action) => {
      state.isLoggedIn = false;
      state.error = false;
    },
    [authSignUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authSignUp.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = true;
    },
    [authLogin.pending]: (state, action) => {
      state.isLoggedIn = false;
      state.error = false;
    },
    [authLogin.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authLogin.rejected]: (state, _) => {
      state.isLoggedIn = false;
      state.error = true;
    },
    [authLogOut.pending]: (state, _) => {
      state.error = false;
    },
    [authLogOut.fulfilled]: (state, _) => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.error = false;
    },
    [authLogOut.rejected]: (state, _) => {
      state.isLoggedIn = true;
      state.error = true;
    },
    [authCurrentUser.pending]: (state, _) => {
      state.isFetchingCurrentUser = true;
      state.error = false;
    },
    [authCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
      state.error = false;
    },
    [authCurrentUser.rejected]: (state, _) => {
      state.user = { name: '', email: '' };
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.error = false;
    },
  },
});

export default authSlice.reducer;
