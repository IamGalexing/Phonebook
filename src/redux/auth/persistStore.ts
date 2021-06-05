import storage from 'redux-persist/lib/storage';

export const contactsPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
