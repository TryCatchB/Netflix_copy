import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { contentAPI } from "./features/contentAPI";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [contentAPI.reducerPath]: contentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
