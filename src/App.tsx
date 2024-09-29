import React, { FC } from "react";
import { routes } from "./routes/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./store";
import { useSelector } from "react-redux";

const App: FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.path} path={item.path} element={<item.element />} />
      ))}
      <Route
        path="/"
        element={isAuth ? <Navigate to="/" /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
};

export default App;
