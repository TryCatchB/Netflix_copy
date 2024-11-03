import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Content } from "../../../types/types";
import { RootState } from "../../../store";
import Title from "../../UI/title/Title";
import Loader from "../../UI/loader/Loader";
import ListItems from "../../UI/listItems/ListItems";
import styles from "./Favorites.module.css";

const Favorites: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const userId = useSelector((state: RootState) => state.user.userId);

  const data = useSelector((state: RootState) =>
    userId ? state.favorites.favorites[userId] : null
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
