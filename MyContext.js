import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [page, setSharedVariable] = useState('');

  const updatePage = (newValue) => {
    setSharedVariable(newValue);
  };

  return (
    <MyContext.Provider value={{ page, updatePage }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};