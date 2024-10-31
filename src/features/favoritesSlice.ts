import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../types/types";

interface IFavoritesSlice {
  favorites: Record<string, Map<string, Content>>;
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
        state.favorites[userName] = new Map<string, Content>();
      }

      state.favorites[userName].set(favorite.id, favorite);
    },
    removeFavorite: (
      state,
      action: PayloadAction<{ userName: string; favoriteId: string }>
    ) => {
      const { userName, favoriteId } = action.payload;

      if (!state.favorites[userName]) return;

      state.favorites[userName].delete(favoriteId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
