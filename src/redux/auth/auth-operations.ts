import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAuthLogIn, TAuthIn, TAuthSignIn } from '../intefaces/auth';
import { IStore } from '../intefaces/indexStore';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authSignUp = createAsyncThunk<
  TAuthIn,
  TAuthSignIn,
  { rejectValue: string }
>('auth/signup', async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
});

export const authLogin = createAsyncThunk<
  TAuthIn,
  TAuthLogIn,
  { rejectValue: string }
>('auth/login', async (credentials: TAuthLogIn) => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
});

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
    const state = thunkAPI.getState() as IStore;
    const currentToken = state && state.auth.token;

    if (currentToken === '') {
      return thunkAPI.rejectWithValue('Please LogIn to continue');
    }

    token.set(currentToken);
    const { data } = await axios.get('/users/current');
    return data;
  },
);
