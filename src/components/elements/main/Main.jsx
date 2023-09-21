import React, { useState } from "react";
import { DATA } from "../../../data";
import Sidebar from "../../UI/sidebar/Sidebar";
import Information from "./Information";
import ButtomNavigation from "../../UI/bottomNavigation/BottomNavigation";
import styles from "./Main.module.css";
import Episodes from "../episodes/Episodes";

const Main = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(false);

  return (
    <main className={styles.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSidebarShow ? "85%" : "90%",
        }}
      >
        {activeTab === 1 ? (
          <Information movie={DATA[0]} />
        ) : (
          activeTab === 2 && <Episodes movie={DATA[0]} />
        )}
      </div>
      <ButtomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};

export default Main;
