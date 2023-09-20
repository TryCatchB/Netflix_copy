import React from "react";
import styles from "./Sidebar.module.css";

const menu = ["Popular", "TV Shows", "Films", "My list"];

const Sidebar = ({ isSidebaShow, setIsSidebarShow }) => {
  return (
    <div className={styles.sidebar}>
      <button onClick={() => setIsSidebarShow(true)}>
        <i className={`bx bx-${isSidebaShow ? "x" : "border-left"}`}></i>
      </button>
      <ul>
        {menu.map((title) => (
          <li>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
