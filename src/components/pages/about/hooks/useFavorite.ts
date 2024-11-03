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
  const userId = useSelector((state: RootState) => state.user.userId);

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites[userId]
  );
  const isFavorite =
    foundedContent && favorites ? !!favorites[foundedContent.title] : false;

  const toggleFavorite = useCallback(async () => {
    if (!foundedContent) return;

    if (isFavorite) {
      const { removeFavorite } = await import(
        "../../../../features/favoritesSlice"
      );

      dispatch(removeFavorite({ userId, favoriteId: foundedContent.title }));
    } else {
      const { addFavorite } = await import(
        "../../../../features/favoritesSlice"
      );

      dispatch(addFavorite({ userId, favorite: foundedContent }));
    }
  }, [dispatch, foundedContent, isFavorite, userId]);

  return { isFavorite, toggleFavorite };
};
