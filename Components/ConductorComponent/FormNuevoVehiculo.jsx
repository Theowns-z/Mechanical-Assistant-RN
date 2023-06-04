import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"
import IcomComponents from '../IcomComponents';
import ProfileConductor from './ProfileConductor';


const FormNuevoVehiculo = () => {

    return (
        <View style={styles.container}>
            <ProfileConductor/>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontWeight:'bold'}}>MECHANICAL ASSISTANT</Text>
            <View style={styles.contenedorForm}>
                <Text style={{textAlign:'center', color:'#276E90', margin: 35, fontSize:25, fontWeight:'bold'}}>Nuevo vehiculo</Text>
                <Text style = {styles.subtitulo2}>Nombre del modelo</Text>
                <TextInput style = {styles.TextInput} placeholder="Ingresar Modelo "></TextInput> 
                <Text style = {styles.subtitulo2}>Marca</Text>
                <TextInput style = {styles.TextInput} placeholder='Ingresar la marca'></TextInput>
                <Text style = {styles.subtitulo2}>Año</Text>
                <TextInput style = {styles.TextInput} placeholder="Ingresar el año "></TextInput> 
                <Text style = {styles.subtitulo2}>Placa</Text>
                <TextInput style = {styles.TextInput} placeholder='Ingresar la placa'></TextInput>
                <TouchableOpacity  style={styles.button}>
                    <Text style={{textAlign:'center', color:'#276E90'}}>Añadir Vehiculo</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={{textAlign:'center', color:'#276E90', margin: 25, fontSize:40, fontWeight:'bold'}}>[M.A]</Text>
            <View style={styles.line} />
            <IcomComponents /> 
        </View>
    );
}




const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 20,
        height : '100%',
        
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#F2AA1F',
        marginVertical: 10,
      },

    contenedorForm:{
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        borderColor: '#276E90',
        borderWidth: 2,
        justifyContent: 'center',
        height:'62%', 
        
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

export default FormNuevoVehiculo;