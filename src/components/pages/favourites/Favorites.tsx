import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";

const Favorites: FC = (): JSX.Element => {
  const userName = useParams<{ userName: string }>().userName?.replace(
    /:/g,
    ""
  );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites[userName] || []
  );

  const favoriteItems = Array.from(favorites.values());

  return <div>{favoriteItems && <p>Favorites</p>}</div>;
};

export default Favorites;
