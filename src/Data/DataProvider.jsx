import React, { createContext, useContext, useReducer } from "react";
import {initialState,Reducer} from './DataReducer';

export const DataContext = createContext(initialState);

// context provider takes an object
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useReducer(Reducer,initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () =>  useContext(DataContext);


/*
export const CreateDataContext = createContext(initialState);

// if we provide the UseDataProvider the initialState and the Reducer function where it is called then we will pass these as the parameters otherwise we will pass them as import from the DataReducers
export const dataProvider = ({initialState,reducer,children}) =>{
    return <CreateDataContext.Provider value={useReducer(Reducer,initialState)}> 
    {children}
    </CreateDataContext.Provider>
}

// it is used where want to use or provide the data from the Context 
export const UseDataProvider = () =>{
    useContext(DataContext);
}


// we wrap the component where we want the context to be passed by the DataProvider because it allows the data to be easily provided in the children components
 */
