import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TItem, TUpdateItem, TUser } from '../intefaces/contacts';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsList = createAsyncThunk<TItem[]>(
  'contacts/getContactsList',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk<
  TItem,
  TUser,
  { rejectValue: string }
>('contacts/addContact', async ({ name, number }: TUser) => {
  const contact = {
    name,
    number,
  };
  const { data } = await axios.post('/contacts', contact);
  console.log('return', data);
  return data;
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (contactId: string) => {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
});

export const updateContact = createAsyncThunk<
  TItem,
  TUpdateItem,
  { rejectValue: string }
>(
  'contacts/updateContact',
  async ({ id, nameNew, numberNew }: TUpdateItem) => {
    const contact = {
      name: nameNew,
      number: numberNew,
    };
    const { data } = await axios.patch(`/contacts/${id}`, contact);
    return data;
  },
);
