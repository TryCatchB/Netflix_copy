import React, { useState } from "react";
import data from "./../../../data";
import Sidebar from "../../UI/sidebar/Sidebar";
import Information from "./Information";
import ButtomNavigation from "../../UI/bottomNavigation/BottomNavigation";

const Main = () => {
  const [isSidebaShow, setIsSidebarShow] = useState(false);

  return (
    <main>
      <Sidebar
        isSidebaShow={isSidebaShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div style={{ backgroundImage: `url(${data[0]})` }}>
        <Information movie={data[0]} />
        <ButtomNavigation />
      </div>
    </main>
  );
};

export default Main;
