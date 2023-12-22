import React from "react";
import ListItem from "./ListItem";
import classes from './list.module.css';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { UsePlaylistItemContext } from "../../../../../Data/PlaylistItemProvider";


function List() {
  const [{ playlistItem }] = UsePlaylistItemContext();
  return (
    <div className={classes.list}>
      <div className={classes.heading}>
        <div className={classes.title1}>
          <span className={classes.span1}>#</span>
          <span>Title</span>
        </div>
        <p className={classes.title2}>Album</p>
        <AccessTimeIcon className={classes.title__icon} />
      </div>
      <hr />
      {playlistItem?.tracks?.items?.map((item, index) => (
        <ListItem track={item.track} ind={index} key={index} />
      ))}
    </div>
  );
}

export default List;
