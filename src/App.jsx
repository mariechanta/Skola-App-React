import { createContext, useReducer } from 'react';

const initialState = {
  // Definiera din initialState här
};

const reducer = (state, action) => {
  // Implementera reducer-logiken här
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
