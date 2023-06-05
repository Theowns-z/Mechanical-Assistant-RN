
import React from 'react';


import { Router } from './routes/Router';
import { MechanicalContextProvider } from './context/MechanicalContext';


export default function App() {

  return (
    <MechanicalContextProvider>
      <Router></Router>
    </MechanicalContextProvider>
  );
}


