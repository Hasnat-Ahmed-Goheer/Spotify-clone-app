import React from "react";
import classes from "./sidebar.module.css";
import SidebarOption from "./SidebarOption";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { usePlaylistContext } from "../../../Data/PlaylistProvider";
import { UsePlaylistIdContext } from "../../../Data/PlaylistIdProvider";

const Sidebar = () => {
  const [{ playlist }, dispatchPlaylist] = usePlaylistContext();
  const [playlistId, dispatchPlaylistId] = UsePlaylistIdContext();

  const handlePlaylistSelection = (playlistId) => {
    dispatchPlaylistId({
      type: "SET_ID",
      id: playlistId,
    });
  };

  return (
    <div className={classes.sidebar}>
      <img
        className={classes["sidebar__logo"]}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={AiOutlineHome} title="Home" />
      <SidebarOption Icon={BsSearch} title="Search" />
      <SidebarOption Icon={BiLibrary} title="Your Library" />
      <br />
      <strong className={classes["sidebar__strong"]}>PLAYLISTS</strong>
      <hr />
      {playlist?.items?.map((playlistItem) => (
        <SidebarOption
          key={playlistItem.id}
          title={playlistItem?.name}
          img={playlistItem?.images[0]?.url}
          onClick={() => handlePlaylistSelection(playlistItem?.id)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
