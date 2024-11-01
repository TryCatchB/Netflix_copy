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
      action: PayloadAction<{ userName: string; favorite: Content }>
    ) => {
      const { userName, favorite } = action.payload;

      if (!state.favorites[userName]) {
        state.favorites[userName] = {};
      }

      if (!state.favorites[userName][favorite.id]) {
        state.favorites[userName][favorite.id] = favorite;
      }
    },
    removeFavorite: (
      state,
      action: PayloadAction<{ userName: string; favoriteId: string }>
    ) => {
      const { userName, favoriteId } = action.payload;

      if (state.favorites[userName]) {
        delete state.favorites[userName][favoriteId];
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
