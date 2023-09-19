import React from "react";
import Profile from "./Profile";
import Search from "../../UI/search/Search";
import netflixImg from "./Netflix.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img src={netflixImg} alt="Logo" />
        </a>
        <Search />
      </div>
      <Profile />
    </header>
  );
};

export default Header;
