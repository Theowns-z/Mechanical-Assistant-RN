import React, { createContext, useState } from 'react';

export const MechanicalContext = createContext();

export const MechanicalContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);

  const guardarDatos = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  return (
    <MechanicalContext.Provider value={{ datos, guardarDatos }}>
      {children}
    </MechanicalContext.Provider>
  );
};
