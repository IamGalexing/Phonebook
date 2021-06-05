import { createSlice } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import {
  getContactsList,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';
import { TContacts } from '../intefaces/contacts';

const initialState = {
  items: [],
  filter: '',
  loading: false,
  error: null,
} as TContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(filterContacts, (state, action) => {
      state.filter = action.payload;
    });
    builder.addCase(getContactsList.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getContactsList.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(getContactsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items = [action.payload, ...state.items];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateContact.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.loading = false;
    });
    builder.addCase(updateContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default contactsSlice.reducer;
