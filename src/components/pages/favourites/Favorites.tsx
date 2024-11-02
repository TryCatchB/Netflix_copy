import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Content } from "../../../types/types";
import { RootState } from "../../../store";
import Title from "../../UI/title/Title";
import Loader from "../../UI/loader/Loader";
import ListItems from "../../UI/listItems/ListItems";
import styles from "./Favorites.module.css";

const Favorites: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userName = useParams<{ name: string }>().name?.replace(/:/g, "");

  const data = useSelector((state: RootState) =>
    userName ? state.favorites.favorites[userName] : null
  );

  const favorites = data ? Object.values(data) : [];

  useEffect(() => {
    if (data !== null) setIsLoading(false);
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.favorites}>
      {favorites.length != 0 ? (
        <>
          <Title title="Favorites" />
          <ListItems data={favorites as Content[]} />
        </>
      ) : (
        <p className={styles.text}>You don't have favorites😔</p>
      )}
    </div>
  );
};

export default Favorites;
