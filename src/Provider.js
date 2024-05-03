import React, { createContext, useState, useContext } from 'react';

// Create the context
export const ProviderContext = createContext();

// Provider component
const Provider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ProviderContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </ProviderContext.Provider>
  );
};

// Custom hook to consume the context
export const useProvider = () => {
  return useContext(ProviderContext);
};

export default Provider;
