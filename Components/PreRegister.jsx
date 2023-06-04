import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"
import SvgComponent from './SvgComponent';
import{imagen} from '../Images/reparaciones.jpg';
import DropdownButton from './DropdownButton';

const PreRegister = () => {

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontWeight:'bold', fontSize:20}}>MECHANICAL ASSISTANT</Text>
            <View style={styles.contenedorForm}>
                <Text style={{textAlign:'center', color:'#276E90', margin: 25, fontSize:20, fontWeight:'bold'}}>Registrarse como</Text>
                <TouchableOpacity  style={styles.button}>
                    <Text style={{textAlign:'center', color:'#276E90', fontWeight:'bold'}}>Conductor</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={{textAlign:'center', color:'#276E90', fontWeight:'bold'}}>Mecanico</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontSize:40, fontWeight:'bold', justifyContent:'flex-end'}}>[M.A]</Text>
        </View>
    );
}




const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 20,
        justifyContent: 'center',
        
    },

    contenedorForm:{
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        borderColor: '#276E90',
        borderWidth: 2,
        
        
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
          borderColor: '#276E90',
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
        marginTop: 5,
        marginBottom: 40,
        alignSelf: 'center',
      },


});

export default PreRegister;