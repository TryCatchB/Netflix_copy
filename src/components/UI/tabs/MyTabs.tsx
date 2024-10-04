import React, { FC, SyntheticEvent, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./MyTabs.module.css";

type ThandleChange = {
  (event: SyntheticEvent, newNumber: number): void;
};

const MyTabs: FC = () => {
  const [value, setValue] = useState<number>(() => {
    const savedValue = localStorage.getItem("selectedTab");
    return savedValue ? parseInt(savedValue) : 0;
  });

  const handleChange: ThandleChange = (event, newValue) => {
    setValue(newValue);

    localStorage.setItem("selectedTab", newValue.toString());
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className={styles.tabsContainer}
    >
      <Tab
        label="Home"
        component={Link}
        to="/"
        className={`${styles.tab} ${value === 0 ? styles.selected : ""}`}
      />
      <Tab
        label="TV Shows"
        component={Link}
        to="/tvshows"
        className={`${styles.tab} ${value === 1 ? styles.selected : ""}`}
      />
      <Tab
        label="Films"
        component={Link}
        to="/films"
        className={`${styles.tab} ${value === 2 ? styles.selected : ""}`}
      />
      <Tab
        label="Popular"
        component={Link}
        to="/popular"
        className={`${styles.tab} ${value === 3 ? styles.selected : ""}`}
      />
    </Tabs>
  );
};

export default MyTabs;
