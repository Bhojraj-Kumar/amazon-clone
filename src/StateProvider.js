import React, { createContext, useReducer, useContext } from 'react'

// Prepare the dataLayer
export const StateContext = createContext()

// Wrap our app and provide the Date layer
export const StateProvider = ({reducer, initialState, children}) => (

 <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
 </StateContext.Provider>
);


//Pull information from the data layer
export const UseStateValue = () => useContext(StateContext);