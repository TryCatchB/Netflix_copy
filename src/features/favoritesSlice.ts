import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../types/types";

interface IFavoritesSlice {
  favorites: Record<string, Record<string, Content>>;
}

const initialState: IFavoritesSlice = {
  favorites: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (
      state,
      action: PayloadAction<{ userId: string; favorite: Content }>
    ) => {
      const { userId, favorite } = action.payload;

      if (!state.favorites[userId]) {
        state.favorites[userId] = {};
      }

      if (!state.favorites[userId][favorite.title]) {
        state.favorites[userId][favorite.title] = favorite;
      }
    },
    removeFavorite: (
      state,
      action: PayloadAction<{ userId: string; favoriteId: string }>
    ) => {
      const { userId, favoriteId } = action.payload;

      if (state.favorites[userId]) {
        delete state.favorites[userId][favoriteId];
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
