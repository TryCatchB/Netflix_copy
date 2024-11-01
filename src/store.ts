import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userSlice } from "./features/userSlice";
import { contentAPI } from "./features/contentAPI";
import { favoritesSlice } from "./features/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [contentAPI.reducerPath]: contentAPI.reducer,
    [favoritesSlice.name]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(contentAPI.middleware),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
