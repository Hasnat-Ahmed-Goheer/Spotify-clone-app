import { createContext,useReducer,useContext } from "react";
import { playlistItemInitialState, playlistItemReducer } from "./PlaylistItemReducer";

export const PlaylistItemContext = createContext(playlistItemInitialState);

export const PlaylistItemProvider = ({children}) => {
    return (
        <PlaylistItemContext.Provider value={useReducer(playlistItemReducer,playlistItemInitialState)}>
            {children}
        </PlaylistItemContext.Provider>
    )
}

export const UsePlaylistItemContext = () => useContext(PlaylistItemContext); 