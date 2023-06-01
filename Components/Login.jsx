import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground } from 'react-native';
import Svg, { Path } from "react-native-svg"
import SvgComponent from './SvgComponent';
import{imagen} from '../Images/reparaciones.jpg';


const Login = () => {
  return (
      
      
      <View style={styles.container}>
        <View style={styles.contedorimage}>
          <SvgComponent style={styles.imageBackground} />
        </View>
        <Text style = {styles.titulo}>Bienvenido</Text>
        <Text style = {styles.subtitulo}>Ingresa a tu cuenta</Text>
        <Text style = {styles.subtitulo2}>Usuario</Text>
        <TextInput style = {styles.TextInput} placeholder="Ingresar Correo Electronico "></TextInput> 
        <Text style = {styles.subtitulo2}>Contraseña</Text>
        <TextInput style = {styles.TextInput} placeholder='Ingresar Contraseña'></TextInput>
      </View>
      
     
    
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      width: '100%',
      
      
    },

    contedorimage: {

      alignItems: 'center',
      

    },

    imageBackground: {
        
        alignItems: 'center',
      },
  
    titulo: {
    
        fontSize: 60,
        color: '#276E90',
        fontWeight: 'bold',
        textAlign: 'center',
  
  },

    subtitulo: {

        fontSize:20,
        color: 'gray',
        fontWeight: 'bold',     
        textAlign: 'center'
    },

    subtitulo2: {

      fontSize:15,
      color: '#276E90',
      fontWeight: 'bold',     
      textAlign: 'left',
      marginTop: 10,
      paddingStart: 45,
  },

    TextInput: {
        padding: 10,
        paddingStart: 20,
        borderWidth: 1,
        backgroundColor: '#276E90',
        borderColor: '#F2AA1F',
        width: '80%',
        height: 40,
        borderRadius: 20,
        Textcolor: 'gray',
        marginTop: 10,
        backgroundColor: 'white',
        alignSelf: 'center',


    }

  
  });

export default Login;
