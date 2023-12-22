import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Sidebar from "./SideBar/Sidebar";
import classes from "./playerPage.module.css";
import { MusicProvider } from "../../Data/MusicProvider";

const PlayerPage = () => {
  return (
    <div className={classes.player}>
      {/* body  */}
      <div className={classes["player__body"]}>
        <Sidebar />
        <Body />
      </div>
      {/* footer */}
      <MusicProvider>
        <Footer />
      </MusicProvider>
    </div>
  );
};

export default PlayerPage;
