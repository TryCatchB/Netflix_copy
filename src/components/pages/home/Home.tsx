import React, { FC } from "react";
import Greetings from "./greetings/Greetings";
import Header from "../../elements/header/Header";
import styles from "./Home.module.css";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Greetings />
    </main>
  );
};

export default Home;
