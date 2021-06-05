import { createSlice } from '@reduxjs/toolkit';
import {
  authSignUp,
  authLogin,
  authLogOut,
  authCurrentUser,
} from './auth-operations';
import { TAuth } from '../intefaces/auth';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: false,
} as TAuth;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authSignUp.pending, (state, _) => {
      state.isLoggedIn = false;
      state.error = false;
    });
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(authSignUp.rejected, (state, _) => {
      state.isLoggedIn = false;
      state.error = true;
    });
    builder.addCase(authLogin.pending, (state, _) => {
      state.isLoggedIn = false;
      state.error = false;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(authLogin.rejected, (state, _) => {
      state.isLoggedIn = false;
      state.error = true;
    });
    builder.addCase(authLogOut.pending, (state, _) => {
      state.error = false;
    });
    builder.addCase(authLogOut.fulfilled, (state, _) => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.error = false;
    });
    builder.addCase(authLogOut.rejected, (state, _) => {
      state.isLoggedIn = true;
      state.error = true;
    });
    builder.addCase(authCurrentUser.pending, (state, _) => {
      state.isFetchingCurrentUser = true;
      state.error = false;
    });
    builder.addCase(authCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
      state.error = false;
    });
    builder.addCase(authCurrentUser.rejected, (state, _) => {
      state.user = { name: '', email: '' };
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.error = false;
    });
  },
});

export default authSlice.reducer;
