import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "../../../../types/types";
import { RootState } from "../../../../store";

interface UseFavoriteReturn {
  isFavorite: boolean;
  toggleFavorite: () => Promise<void>;
}

export const useFavorite = (foundedContent: Content): UseFavoriteReturn => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites[name]
  );
  const isFavorite =
    foundedContent && favorites ? !!favorites[foundedContent.id] : false;

  const toggleFavorite = useCallback(async () => {
    if (!foundedContent) return;

    if (isFavorite) {
      const { removeFavorite } = await import(
        "../../../../features/favoritesSlice"
      );

      dispatch(removeFavorite({ name, favoriteId: foundedContent.id }));
    } else {
      const { addFavorite } = await import(
        "../../../../features/favoritesSlice"
      );

      dispatch(addFavorite({ name, favorite: foundedContent }));
    }
  }, [dispatch, foundedContent, isFavorite, name]);

  return { isFavorite, toggleFavorite };
};
