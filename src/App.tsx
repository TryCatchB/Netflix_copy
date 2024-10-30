import React, { FC, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { routes } from "./routes/routes";
import { completeProfile, login } from "./features/userSlice";
import Layout from "./components/UI/layout/Layout";
import CompleteProfilePage from "./components/UI/completeProfilePage/CompleteProfilePage";
import SignInPage from "./components/UI/signInPage/SignInPage";

const LOCAL_STORAGE_KEYS = {
  USER_NAME: "userName",
  USER_AGE: "userAge",
  USER_DOB: "userDob",
  USER_CITY: "userCity",
  IS_AUTH: "isAuth",
  USER_PASSWORD: "userPassword",
  IS_PROFILE_COMPLETE: "isProfileComplete",
  LAST_VISITED_PAGE: "lastVisitedPage",
};

const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth, isProfileComplete } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.LAST_VISITED_PAGE,
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const userName = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_NAME);
    const userAge = Number(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_AGE));
    const userDob = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DOB) || "";
    const userCity = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_CITY) || "";
    const isAuth = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_AUTH);

    const userPassword =
      localStorage.getItem(LOCAL_STORAGE_KEYS.USER_PASSWORD) || "";

    const isProfileComplete = localStorage.getItem(
      LOCAL_STORAGE_KEYS.IS_PROFILE_COMPLETE
    );

    const lastVisitedPage = localStorage.getItem(
      LOCAL_STORAGE_KEYS.LAST_VISITED_PAGE
    );

    if (userName && isAuth === "true" && isProfileComplete === "true") {
      dispatch(login({ name: userName, password: userPassword }));
      dispatch(completeProfile({ age: userAge, dob: userDob, city: userCity }));

      if (lastVisitedPage) navigate(lastVisitedPage);
    }
  }, [dispatch, navigate]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/auth"
          element={
            isAuth ? <Navigate to="/complete-profile" /> : <SignInPage />
          }
        />
        <Route
          path="/complete-profile"
          element={
            isAuth && !isProfileComplete ? (
              <CompleteProfilePage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              isAuth ? (
                isProfileComplete ? (
                  <route.element />
                ) : (
                  <Navigate to="/complete-profile" />
                )
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
