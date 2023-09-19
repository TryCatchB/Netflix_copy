import React from "react";
import userIcon from "./User-icon-2.png";
import styles from "./Header.module.css";

const Profile = () => {
  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles.notification}>
        <i className="bx bxs-bell"></i>
        <span></span>
      </div>
      <div className={styles.profile}>
        <div>
          <img src={userIcon} alt="Logo" />
        </div>
        <i className="bx bx-caret-down"></i>
      </div>
    </div>
  );
};

export default Profile;
