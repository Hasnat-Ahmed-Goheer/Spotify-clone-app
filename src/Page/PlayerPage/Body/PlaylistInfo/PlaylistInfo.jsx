import React from "react";
import classes from "./playlistInfo.module.css";
import { UsePlaylistItemContext } from "../../../../Data/PlaylistItemProvider";

function PlaylistInfo() {
    const [{  playlistItem }] =
      UsePlaylistItemContext();
      const playlistComponent =  <div className={classes.playlistInfo}>
      <img src={playlistItem?.images[0].url}alt={playlistItem?.name} />
      <div className={classes.playlistInfoText}>
        <strong>PLAYLIST</strong>
        <h2>{playlistItem?.name}</h2>
        <p>{playlistItem?.description}</p>
      </div>
    </div>
  return (
     playlistComponent 
   
  );
}



export default PlaylistInfo;
