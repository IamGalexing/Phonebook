import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction<string>(
  'contacts/filter'
);
