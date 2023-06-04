import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"


const FormConductor2 = () => {

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontWeight:'bold'}}>MECHANICAL ASSISTANT</Text>
            <View style={styles.contenedorForm}>
                <Text style={{textAlign:'center', color:'#276E90', margin: 35, fontSize:25, fontWeight:'bold'}}>Registro</Text>
                <Text style = {styles.subtitulo2}>Correo</Text>
                <TextInput style = {styles.TextInput} placeholder="Ingresar el correo "></TextInput> 
                <Text style = {styles.subtitulo2}>Contraseña</Text>
                <TextInput style = {styles.TextInput} placeholder='Ingresar contraseña'></TextInput>
                <Text style = {styles.subtitulo2}>Direccion</Text>
                <TextInput style = {styles.TextInput} placeholder='Ingresar direccion'></TextInput>
                <TouchableOpacity  style={styles.button}>
                    <Text style={{textAlign:'center', color:'#276E90'}}>Registrarse</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontSize:40, fontWeight:'bold'}}>[M.A]</Text>
        </View>
    );
}




const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 20,
        
    },

    contenedorForm:{
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        borderColor: '#276E90',
        borderWidth: 2,
        justifyContent: 'center',
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
          marginTop: 10,
          backgroundColor: 'white',
          alignSelf: 'center',
  
  
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
        margin: 30,
        alignSelf: 'center',
      },


});

export default FormConductor2;