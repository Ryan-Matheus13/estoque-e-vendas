import { configureStore } from "@reduxjs/toolkit";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

import { inventorySlice } from "./inventory/slice";
import { authSlice } from "./auth/slice";

const persistConfigAuth = {
  key: "auth",
  storage: storageSession,
};

const persistedAuthReducer = persistReducer(
  persistConfigAuth,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    inventory: inventorySlice.reducer,
    financial: inventorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
