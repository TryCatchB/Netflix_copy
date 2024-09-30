import React, { FC } from "react";
import { Link } from "react-router-dom";
import netflix from "./Netflix.png";
import userIcon from "./User-icon-2.png";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={netflix} alt="Netflix image" />
      </Link>
      <Link to="/profile">
        <img src={userIcon} alt="User icon" />
      </Link>
    </header>
  );
};

export default Header;
