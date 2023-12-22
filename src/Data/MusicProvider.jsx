import { musicReducer,musicInitialState } from "./MusicReducer";
import { useContext,createContext,useReducer } from "react";

export const MusicContext = createContext(musicInitialState);

export const MusicProvider = ({children}) =>{
    return(
        <MusicContext.Provider value={useReducer(musicReducer,musicInitialState)}>
            {children}
        </MusicContext.Provider>
    )
}

export const UseMusicContext = () => useContext(MusicContext);