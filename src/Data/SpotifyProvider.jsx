import { createContext,useContext,useReducer } from "react";
import { spotifyInitialState,SpotifyReducer } from "./SpotifyReducer";

export const SpotifyContext = createContext(spotifyInitialState);

export const SpotifyProvider = ({children}) =>{
    return (
        <SpotifyContext.Provider value={useReducer(SpotifyReducer,spotifyInitialState)}>
            {children}
        </SpotifyContext.Provider>
    )
}

export const UseSpotifyContext = () => useContext(SpotifyContext);