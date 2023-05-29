import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground } from 'react-native';
import Svg, { Path } from "react-native-svg"
import SvgComponent from './SvgComponent';



const Login = () => {
  return (
      
       
      <View style={styles.container}>
      <Text style = {styles.titulo}>Bienvenido</Text>
      <Text style = {styles.subtitulo}>Ingresa a tu cuenta</Text>
      <TextInput style = {styles.TextInput} placeholder="Ingresar Correo Electronico "></TextInput> 
      <TextInput style = {styles.TextInput} placeholder='Ingresar Contraseña'></TextInput>
      </View>
      
    
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageBackground: {
        
        width : '50%',
        height : '50%',
      },
  
    titulo: {
    
        fontSize: 60,
        color: '#34434D',
        fontWeight: 'bold',
        textAlign: 'center',
  
  },

    subtitulo: {

        fontSize:20,
        color: 'gray',
        fontWeight: 'bold',     
        textAlign: 'center'
    },

    TextInput: {
        padding: 10,
        paddingStart: 20,
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',


    }

  
  });

export default Login;
