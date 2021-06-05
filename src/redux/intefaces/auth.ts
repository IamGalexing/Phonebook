export type TAuthUser = {
  name: string;
  email: string;
};

export type TAuthSignIn = {
  name: string;
  email: string;
  password: string;
};

export type TAuthLogIn = {
  email: string;
  password: string;
};

export type TAuthIn = {
  user: TAuthUser;
  token: string;
};

export type TAuth = {
  user: TAuthUser;
  token: string;
  isLoggedIn: boolean;
  isFetchingCurrentUser: boolean;
  error: string | unknown;
};
