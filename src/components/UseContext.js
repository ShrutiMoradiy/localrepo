import React, { createContext, useContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ chid }) => {
    const userData = {
        name : "Ramesh",
        age : 28
    };
    
  return <AppContext.Provider value={userData}> {chid} </AppContext.Provider>;

}


export { AppContext, AppProvider };
