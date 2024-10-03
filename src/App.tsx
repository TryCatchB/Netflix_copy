import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { routes } from "./routes/routes";
import Layout from "./components/UI/layout/Layout";

const App: FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === "/auth" && isAuth ? (
                <Navigate to="/home" />
              ) : (
                <route.element />
              )
            }
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
