import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
    // Guardar el token en AsyncStorage o en una solución de almacenamiento persistente
  };

  const logout = () => {
    setToken(null);
    // Eliminar el token de AsyncStorage u otro almacenamiento persistente
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
