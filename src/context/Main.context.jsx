import React, { createContext, useReducer } from "react";

export const MainContext = createContext(null);

const initState = {
  navbarHeight: 0,
};

export const CONSTANT = {
  SET_NAVBAR_HEIGHT: "NAVBAR_HEIGHT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANT.SET_NAVBAR_HEIGHT:
      return { ...state, navbarHeight: action.payload };
    default:
      return state;
  }
};

const withMainContext = (App) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
      <MainContext.Provider value={{ state, dispatch }}>
        <App />
      </MainContext.Provider>
    );
  };
};

export default withMainContext;