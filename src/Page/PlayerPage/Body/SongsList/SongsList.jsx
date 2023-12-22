import React from "react";
import List from "./List/List";
import { UsePlaylistIdContext } from "../../../../Data/PlaylistIdProvider";
import classes from "./songsList.module.css";
import { PlayCircleFilled } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SongsList() {
  const [{ id }] = UsePlaylistIdContext();

  return (
    <div className={classes.songsList}>
      <div className={classes["songsList__icons"]}>
        <PlayCircleFilled className={classes["icons__play"]} />
        {id === "37i9dQZEVXcI8s6ltqTt2X" ? (
          <FavoriteIcon className={classes.icons} />
        ) : (
          ""
        )}
        <MoreHorizIcon className={classes.icons} />
      </div>
      <List />
    </div>
  );
}
export default SongsList;
