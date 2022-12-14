import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import userReducer from "./user/userSlice";

import { persistStore, persistReducer } from "redux-persist";

import { rootReducer } from "./rootReducer";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [userReducer],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {},
    }).concat(logger),thunk
});

export const persistor = persistStore(store);
