import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import storage from 'redux-persist/lib/storage';
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
import { filterReducer } from './filterSlice';

const todoPersistConfig = {
  key: 'todos',
  storage,
};

export const store = configureStore({
  reducer: {
    todos: persistReducer(todoPersistConfig, todoReducer),
    filters: filterReducer,
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const store = configureStore({ reducer: todoReducer });
