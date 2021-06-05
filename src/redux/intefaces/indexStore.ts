import { TAuth } from './auth';
import { TContacts } from './contacts';

export interface IStore {
  contacts: TContacts;
  auth: TAuth;
}
