import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsList = createAsyncThunk(
  'contacts/getContactsList',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, nameNew, numberNew }) => {
    const contact = {
      name: nameNew,
      number: numberNew,
    };
    const { data } = await axios.patch(`/contacts/${id}`, contact);
    return data;
  },
);
