import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { login } from "../../../features/userSlice";

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
    <div>
      <h1>Welcome {user.name}!</h1>
    </div>
  );
};

export default Greetings;
