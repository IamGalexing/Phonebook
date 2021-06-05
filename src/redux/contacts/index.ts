export {
  getContacts,
  getContactsToShow,
  getAmountOfContacts,
  getIsLoading,
} from './contacts-selectors';
export { default as combineContactsReducer } from './contacts-reducer';
export * from './contacts-actions';
export {
  getContactsList,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';
