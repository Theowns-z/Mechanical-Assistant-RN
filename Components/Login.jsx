import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg"
import SvgComponent from './SvgComponent';
import { imagen } from '../Images/reparaciones.jpg';
import DropdownButton from './DropdownButton';
import SvgComponentHome from './SvgComponents/SvgComponentHome';
import { MechanicalContext } from '../context/MechanicalContext';


const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 'Authorization': `Token token=${user.token}`

  const { datos, guardarDatos } = useContext(MechanicalContext);

  const onClick = (datos) => {

    guardarDatos(datos);
    console.log(datos)
    if (datos.role === 'MECANICO') {
      navigation.navigate('HomeMecanico')

    } else if (datos.role === 'CONDUCTOR') {
      navigation.navigate('HomeConductor')
    }


  }

  function Login(email, password) {
    const url = 'https://mechanical-assistant-sb-production.up.railway.app/api/auth/login';

    const data = {
      email: email,
      password: password,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${datos.token}`
      },
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => onClick(data.response))
      .catch(error => console.log('Error:', error));
  }



  return (

    <View style={styles.container}>
      <View style={styles.contedorimage}>
        <SvgComponent style={styles.imageBackground} />
      </View>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
      <Text style={styles.subtitulo2}>Usuario</Text>
      <TextInput onChangeText={(text) => setEmail(text)} style={styles.TextInput} placeholder="Ingresar Correo Electronico "></TextInput>
      <Text style={styles.subtitulo2}>Contraseña</Text>
      <TextInput onChangeText={(text) => setPassword(text)} style={styles.TextInput} placeholder='Ingresar Contraseña'></TextInput>
      <Text style={{ textAlign: 'center', margin: 10, color: '#276E90' }}>¿Olvidaste tu contraseña?</Text>
      <Text style={{ textAlign: 'center', margin: 10, color: '#276E90' }}>Seleccione un Rol</Text>
      <DropdownButton />

      <TouchableOpacity
        onPress={() => Login(email, password)}
        style={styles.button}>
        <Text style={styles.buttonText2}>Ingresar</Text>

      </TouchableOpacity>
      <Text onPress={() => { navigation.navigate('Registrar') }} style={{ textAlign: 'center', margin: 10, color: '#276E90' }}>Registrate Aqui</Text>


    </View>



  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    width: '100%',
    height: '100%',


  },

  buttonText2: {

    color: '#276E90',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',

  },

  button: {
    padding: 10,
    paddingStart: 20,
    borderWidth: 1,
    backgroundColor: '#F2AA1F',
    borderColor: '#276E90',
    width: '50%',
    height: 40,
    borderRadius: 20,
    Textcolor: 'gray',
    marginTop: 10,
    alignSelf: 'center',
  },

  buttonDes: {
    textAlign: 'center',
  },

  contedorimage: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
    marginBottom: 20,

  },

  imageBackground: {

    marginTop: 50,
    marginStart: 100,


    alignSelf: 'center',
  },

  titulo: {

    fontSize: 60,
    color: '#276E90',
    fontWeight: 'bold',
    textAlign: 'center',

  },

  subtitulo: {

    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitulo2: {

    fontSize: 15,
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
