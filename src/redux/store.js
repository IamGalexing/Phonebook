import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineContactsReducer } from './contacts';
import { contactsPersistConfig, combineAuthReducer } from './auth';

const store = configureStore({
  reducer: {
    auth: persistReducer(contactsPersistConfig, combineAuthReducer),
    contacts: combineContactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
