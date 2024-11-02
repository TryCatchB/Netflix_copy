import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import Image from "../../UI/image/Image";
import styles from "./UserProfile.module.css";

const UserProfile: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, city, age, dob } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = async () => {
    const { logout } = await import("../../../features/userSlice");

    dispatch(logout());
    navigate("/auth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <Image
          image={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        />
        <p>{name}</p>
      </div>
      <div className={styles.userInfo}>
        <p className={styles.city}>City:</p>
        <p>{city}</p>
        <p className={styles.age}>Age:</p>
        <p>{age}</p>
        <p className={styles.dob}>Date of Birth:</p>
        <p>{dob}</p>
        <Link to={`/favorites/:${name}`} className={styles.favourites}>
          Favourites
        </Link>
        <button className={styles.logout} type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
