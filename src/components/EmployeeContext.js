import React, { createContext, useReducer } from "react";

export const EmployeeContext = createContext();

const initialState = require("../data/employee.json");

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.payload];
        case "REMOVE_EMPLOYEE":
            return state.filter((employee) => employee.id !== action.payload);
        default:
            return state;
    }
};

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};