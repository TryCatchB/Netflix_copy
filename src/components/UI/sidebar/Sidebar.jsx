import React from "react";
import styles from "./Sidebar.module.css";

const menu = ["Popular", "TV Shows", "Films", "My list"];

const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ width: isSidebarShow ? "15%" : "10%" }}
    >
      <button
        onClick={() => setIsSidebarShow(!isSidebarShow)}
        className={`${isSidebarShow ? styles.close : ""}`}
      >
        <i className={`bx bx-${isSidebarShow ? "x" : "border-left"}`} />
      </button>
      <ul className={isSidebarShow ? styles.show : ""}>
        {menu.map((title) => (
          <li key={title}>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
