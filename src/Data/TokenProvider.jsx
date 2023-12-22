import React, { useContext,createContext,useReducer } from "react";
import { tokenInitialState,tokenReducer } from "./TokenReducer";

export const TokenContext = createContext(tokenInitialState);

export const TokenProvider = ({children}) =>{
    return(
        <TokenContext.Provider value={useReducer(tokenReducer,tokenInitialState)}>
            {children}
        </TokenContext.Provider>
    )
}

export const UseTokenContext = () => useContext(TokenContext);