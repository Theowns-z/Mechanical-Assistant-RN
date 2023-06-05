import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import React from 'react';
import FormConductor from './Components/ConductorComponent/FormConductor';
import HomeConductor from './Components/ConductorComponent/HomeConductor';
import VehiculosConductor2 from './Components/ConductorComponent/VehiculosConductor2';
import Pre from './Components/PreRegister';
import Servicios from './Components/ConductorComponent/Servicios';
import DescriptionService from './Components/ConductorComponent/DescriptionService';
import FormConductor2 from './Components/ConductorComponent/FormConductor2';
import FormNuevoVehiculo from './Components/ConductorComponent/FormNuevoVehiculo';
import { Router } from './routes/Router';
import { MechanicalContext, MechanicalContextProvider } from './context/MechanicalContext';



export default function App() {
  return (
    <MechanicalContextProvider>
      <Router></Router>
    </MechanicalContextProvider>
  );
}


