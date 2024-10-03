import React, { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../elements/header/Header";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const location = useLocation();

  const hideHeaderOnAuthPage = location.pathname === "/auth";

  return (
    <>
      {!hideHeaderOnAuthPage && <Header />}
      {children}
    </>
  );
};

export default Layout;
