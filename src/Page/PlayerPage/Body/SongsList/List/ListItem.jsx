import React from "react";
import classes from "./listItem.module.css";

function ListItem({ track, ind }) {
  const duration = track.duration_ms;
  const min = Math.floor((duration / 1000 / 60)),
    sec = Math.floor((duration / 1000) % 60);


  return (
    <div className={classes.listItem}>
      <div className={classes.songLeft}>
        <span className={classes["span_index"]}>{ind + 1}</span>
        <img
          className={classes.songImg}
          src={track?.album?.images[0]?.url}
          alt={track?.name}
        />
        <div className={classes.songName}>
          <span className={classes["span_name"]}>{track.name}</span>
          <span className={classes["span_artist"]}>
            {track.artists.map((item) => `${item.name} `)}
          </span>
        </div>
      </div>
      <div className={classes.songCenter}>{track?.album?.name}</div>
      <div className={classes.songRight}>{`${min}:${sec}`}</div>
    </div>
  );
}

export default ListItem;
