import React, { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
