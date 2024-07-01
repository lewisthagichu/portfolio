'use cilent';
import { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState({
    background: null,
    color: null,
  });

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};
