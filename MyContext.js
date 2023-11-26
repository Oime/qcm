import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [sharedVariables, setSharedVariables] = useState({
    page: 'sujets', // "sujets", "game"
    sujet: null,
  });

  const updateSharedVariables = (key, value) => {
    setSharedVariables((prevVariables) => ({
      ...prevVariables,
      [key]: value,
    }));
  };

  return (
    <MyContext.Provider value={{ sharedVariables, updateSharedVariables }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};