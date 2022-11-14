import { configureStore } from "@reduxjs/toolkit";
import { persistContactReducer } from "./contacts/contactsSlice";
import { filterSlice } from './contacts/filterSlice';
import { authReducer } from './auth/slice'
import { persistStore } from "redux-persist";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';


export const store = configureStore({
  reducer: {
    contacts: persistContactReducer,
    filter: filterSlice.reducer,
    auth: authReducer,
    },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)

