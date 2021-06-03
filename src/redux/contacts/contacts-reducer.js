import { createSlice } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import {
  getContactsList,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
  extraReducers: {
    [filterContacts]: (state, action) => {
      state.filter = action.payload;
    },
    [getContactsList.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getContactsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [getContactsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addContact.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.loading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
      state.loading = false;
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateContact.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.loading = false;
    },
    [updateContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
