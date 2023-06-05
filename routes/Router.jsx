import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Components/Login';
import HomeConductor from '../Components/ConductorComponent/HomeConductor';
const Stack = createStackNavigator();


export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeConductor} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
