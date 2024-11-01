import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const selectUserFavorites = (state: RootState, userName: string) => {
  return state.favorites.favorites[userName];
};

const memoizedUserFavorites = createSelector(
  [selectUserFavorites],
  (userFavorites) => {
    return userFavorites ? userFavorites : [];
  }
);

const Favorites: FC = (): JSX.Element => {
  const userName = useParams<{ userName: string }>().userName?.replace(
    /:/g,
    ""
  );

  const favorites = useSelector((state: RootState) =>
    userName ? memoizedUserFavorites(state, userName) : []
  );

  return <div>{favorites && <p>Favorites</p>}</div>;
};

export default Favorites;
