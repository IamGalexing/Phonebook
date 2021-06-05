export type TUser = {
  name: string;
  number: string;
};

export type TItem = {
  id: string;
  name: string;
  number: string;
};

export type TItems = {
  items: TItem[];
};

export type TUpdateItem = {
  id: string;
  nameNew: string;
  numberNew: string;
};

export type FetchError = {
  message: string;
};

export type TContacts = {
  items: TItem[];
  filter: string;
  loading: boolean;
  error: string | unknown;
};
