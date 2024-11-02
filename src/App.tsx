import React, { FC, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes/routes";
import { RootState } from "./store";
import { LOCAL_STORAGE_KEYS } from "./storageKeys/Keys";
import Layout from "./components/UI/layout/Layout";
import CompleteProfilePage from "./components/UI/completeProfilePage/CompleteProfilePage";
import SignInPage from "./components/UI/signInPage/SignInPage";

const App: FC = (): JSX.Element => {
  const location = useLocation();

  const { isAuth, isProfileComplete } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.LAST_VISITED_PAGE,
      location.pathname
    );
  }, [location.pathname]);

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
