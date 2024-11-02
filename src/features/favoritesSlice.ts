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
      action: PayloadAction<{ name: string; favorite: Content }>
    ) => {
      const { name, favorite } = action.payload;

      if (!state.favorites[name]) {
        state.favorites[name] = {};
      }

      if (!state.favorites[name][favorite.id]) {
        state.favorites[name][favorite.id] = favorite;
      }
    },
    removeFavorite: (
      state,
      action: PayloadAction<{ name: string; favoriteId: string }>
    ) => {
      const { name, favoriteId } = action.payload;

      if (state.favorites[name]) {
        delete state.favorites[name][favoriteId];
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
