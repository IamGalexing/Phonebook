import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authSignUp = createAsyncThunk(
  'auth/signup',
  async credentials => {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  },
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  },
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async () => {
    await axios.post(`/users/logout`);
    token.unset();
  },
);

export const authCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;

    if (currentToken === '') {
      return thunkAPI.rejectWithValue();
    }

    token.set(currentToken);
    const { data } = await axios.get('/users/current');
    return data;
  },
);
