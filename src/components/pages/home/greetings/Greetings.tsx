import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Movie from "./Movie";
import styles from "./Grettings.module.css";

const Greetings: FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={styles.grettings}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome {user.name}!</h1>
        <p className={styles.text}>See your favourite shows and films</p>
      </div>
      <Movie />
    </div>
  );
};

export default Greetings;
