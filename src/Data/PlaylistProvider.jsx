import { playlistInitialState, playlistReducer } from "./PlaylistReducer";
import { createContext, useContext, useReducer } from "react";

export const PlaylistContext = createContext(playlistInitialState);

export const PlaylistProvider = ({ children }) => {
  return (
    <PlaylistContext.Provider
      value={useReducer(playlistReducer, playlistInitialState)}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlaylistContext);