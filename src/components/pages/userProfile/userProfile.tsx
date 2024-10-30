import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/userSlice";
import Image from "../../UI/image/Image";
import styles from "./UserProfile.module.css";

const LOCAL_STORAGE_KEYS = {
  USER_NAME: "userName",
  USER_CITY: "userCity",
  USER_AGE: "userAge",
  USER_DOB: "useDob",
};

const UserProfile: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName =
    localStorage.getItem(LOCAL_STORAGE_KEYS.USER_NAME) || "Your Name";

  const userCity =
    localStorage.getItem(LOCAL_STORAGE_KEYS.USER_CITY) || "not found";

  const userAge =
    localStorage.getItem(LOCAL_STORAGE_KEYS.USER_AGE) || "not found";

  const userDob =
    localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DOB) || "not found";

  const handleLogout = () => {
    dispatch(logout());

    navigate("/auth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <Image
          image={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        />
        <p>{userName}</p>
      </div>
      <div className={styles.userInfo}>
        <p className={styles.city}>City:</p>
        <p>{userCity}</p>
        <p className={styles.age}>Age:</p>
        <p>{userAge}</p>
        <p className={styles.dob}>Date of Birth:</p>
        <p>{userDob}</p>
        <button className={styles.favourites} type="button">
          Favourites
        </button>
        <button className={styles.logout} type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
