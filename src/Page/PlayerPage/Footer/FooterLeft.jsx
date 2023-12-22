import React from "react";
import classes from "./footerLeft.module.css";

function FooterLeft({playing,music}) {
  return (
    <div className={classes.footerLeft}>
      {playing ? (
        <>
          <img
            className={classes["footerLeft__img"]}
            src={music?.image}
            alt=""
          />
          <div>
            <p className={classes["footerLeft__p1"]}>{music?.name}</p>
            <p className={classes["footerLeft__p2"]}>{music?.artist}</p>
          </div>
        </>
      ) : (
        <p className={classes["footerLeft__p1"]}>
          No Song is currently playing
        </p>
      )}
    </div>
  );
}

export default FooterLeft;
