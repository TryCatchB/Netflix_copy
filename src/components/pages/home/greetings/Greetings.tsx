import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import NewestMovies from "./NewestMovies";
import styles from "./Grettings.module.css";

const Greetings: FC = (): JSX.Element => {
  const userName = useSelector((state: RootState) => state.user.name);

  return (
    <div className={styles.grettings}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome {userName}!</h1>
        <p className={styles.text}>See your favourite shows and films</p>
      </div>
      <NewestMovies />
    </div>
  );
};

export default Greetings;
