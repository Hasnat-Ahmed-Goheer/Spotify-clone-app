import React from "react";
import classes from "./sidebarOption.module.css";
// this is basically the destructing of the props
function SidebarOption({ title, Icon,img,onClick }) {
  return (
    <div className={classes.sidebarOption} onClick={onClick}>
      {Icon && <Icon className={classes["sidebarOption__icon"]} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <div className={classes.sidebarOption__playlist}>
          <img src={img} alt="" className={classes.sidebarOption__img} />
          <div className={classes["sidebarOption__textDiv"]}>
            <p className={classes["sidebarOption__p"]}>{title}</p>
            <p className={classes["sidebarOption__pl"]}>Playlist</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
