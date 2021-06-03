export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsError = state => state.auth.error;

export const getName = state => getUser(state).name;

export const getEmail = state => getUser(state).email;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
