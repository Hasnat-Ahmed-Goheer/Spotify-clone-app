import { useReducer,createContext,useContext } from "react";
import { playlistIdInitialState,playlistIdReducer } from "./PlaylistIdReducer";

export const PlaylistIdContext = createContext(playlistIdInitialState);

export const PlaylistIdProvider = ({children}) => {
    return (
        <PlaylistIdContext.Provider value={useReducer(playlistIdReducer,playlistIdInitialState)}>
            {children}
        </PlaylistIdContext.Provider>
    )
}

export const UsePlaylistIdContext = () => useContext(PlaylistIdContext);