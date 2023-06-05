import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Components/Login';
import HomeConductor from '../Components/ConductorComponent/HomeConductor';
import HomeMecanico from '../Components/MecanicoComponent/HomeMecanico';
import FormConductor from '../Components/ConductorComponent/FormConductor';
import FormNuevoVehiculo from '../Components/ConductorComponent/FormNuevoVehiculo';
import VehiculosConductor2 from '../Components/ConductorComponent/VehiculosConductor2';
import DescriptionService from '../Components/ConductorComponent/DescriptionService';


const Stack = createStackNavigator();


export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeMecanico" component={HomeMecanico} />
        <Stack.Screen name="HomeConductor" component={VehiculosConductor2} />
        <Stack.Screen name="Nuevo Vehiculo" component={FormNuevoVehiculo} />
        <Stack.Screen name="Nuevo Servicio" component={DescriptionService} />
        <Stack.Screen name="Registrar" component={FormConductor} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
