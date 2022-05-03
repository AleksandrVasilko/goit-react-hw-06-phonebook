import { configureStore } from "@reduxjs/toolkit";
//import contactsReducer from '.phonebook/reducers';
import {
    persistStore,
    persistReduser,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

const store = configureStore({
    reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {store, persistor}