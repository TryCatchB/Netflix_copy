import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { login } from "../../../../features/userSlice";
import NavBottoms from "../../../UI/NavBottoms";
import styles from "./Grettings.module.css";

const Greetings: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const isAuth = localStorage.getItem("isAuth");

    if (userName && isAuth) {
      dispatch(login({ name: userName, password: "" }));
    }
  }, [dispatch]);

  return (
    <div className={styles.grettings}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome {user.name}!</h1>
        <p className={styles.text}>See your favourite shows and films</p>
        <NavBottoms />
      </div>
    </div>
  );
};

export default Greetings;
