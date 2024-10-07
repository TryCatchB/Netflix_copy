import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "./MyTabs.module.css";

type ThandleChange = {
  (event: SyntheticEvent, newNumber: number): void;
};

type TrouteToTabIndex = {
  [key: string]: number;
};

const routeToTabIndex: TrouteToTabIndex = {
  "/": 0,
  "/tvshows": 1,
  "/films": 2,
  "/popular": 3,
};

const MyTabs: FC = () => {
  const location = useLocation();

  const [value, setValue] = useState<number>(-1);

  const handleChange: ThandleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const currentTabIndex = routeToTabIndex[location.pathname] ?? -1;
    setValue(currentTabIndex);
  }, [location]);

  if (value === -1) return null;

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
