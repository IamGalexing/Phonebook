import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getIsLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error; // ! not use yet

export const getAmountOfContacts = state =>
  state.contacts.items.length;

export const getContactsToShow = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter.trim().length) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    }
    return contacts;
  },
);
