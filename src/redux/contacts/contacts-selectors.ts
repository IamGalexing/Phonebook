import { createSelector } from '@reduxjs/toolkit';
import { IStore } from '../intefaces/indexStore';

export const getContacts = ({ contacts }: IStore) => contacts.items;

export const getFilter = ({ contacts }: IStore) => contacts.filter;

export const getIsLoading = ({ contacts }: IStore) =>
  contacts.loading;

export const getError = ({ contacts }: IStore) => contacts.error; // ! not use yet

export const getAmountOfContacts = ({ contacts }: IStore) =>
  contacts.items.length;

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
