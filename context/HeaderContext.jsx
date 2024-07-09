'use cilent';
import { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState({
    // background: '#8EAEB6',
    color: '#E8E7CB',
  });

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};
