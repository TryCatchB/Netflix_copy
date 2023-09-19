import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, callBack }) => {
  return (
    <button onClick={callBack} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
