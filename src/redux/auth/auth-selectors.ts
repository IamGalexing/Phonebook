import { IStore } from '../intefaces/indexStore';

export const getUser = ({ auth }: IStore) => auth.user;

export const getToken = ({ auth }: IStore) => auth.token;

export const getIsLoggedIn = ({ auth }: IStore) => auth.isLoggedIn;

export const getIsError = ({ auth }: IStore) => auth.error;

export const getName = (store: IStore) => getUser(store).name;

export const getEmail = (store: IStore) => getUser(store).email;

export const getIsFetchingCurrentUser = ({ auth }: IStore) =>
  auth.isFetchingCurrentUser;
