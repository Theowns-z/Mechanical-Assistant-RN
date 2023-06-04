import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet,  TouchableOpacity, FlatList} from 'react-native';
import StyledText from '../Styles/StyledText';
import Vehiculos from '../Data/Vehiculos.js';
import IcomComponents from '../IcomComponents';



const VehiculosConductor2 = () => {


    return(

    <View style={styles.container}>
      
      <StyledText subtitle>
        Tus vehiculos
      </StyledText>
        
      
      <FlatList
        style = {styles.contenedorMecanicos}
        data={Vehiculos}
        keyExtractor={meca => meca.id}
        renderItem={({ item }) => (
          <View style = {styles.Boxmecanicos}>
            <StyledText textInfo >Nombre: {item.nombre_modelo} {item.apellido} </StyledText>
            <StyledText textInfo >Marca: {item.marca}</StyledText>
            <StyledText textInfo >Modelo: {item.modelo}</StyledText>
            <StyledText textInfo >Placa: {item.placa}</StyledText>
            <View style = {styles.containerbottom}>
            <TouchableOpacity style = {styles.bottom}>
              <Text style = {{color: '#276E90', fontSize: 16,  textAlign: 'right', margin: 10}}>Contactar mecanico</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        
          )}  
    
       />
       
       <View style = {styles.containerbottom2}>
          <TouchableOpacity style = {styles.bottom}>
              <Text style = {{color: '#276E90', fontSize: 16,  textAlign: 'right', margin: 10}}>Añadir vehiculo</Text>
          </TouchableOpacity>
        </View>   
        <View style={styles.line} />
    <IcomComponents /> 
    </View>


    
  )



}
const styles = StyleSheet.create({
     
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        height: '100%',
        

    },

    
      line: {
        width: '100%',
        height: 1,
        backgroundColor: '#F2AA1F',
        marginVertical: 10,
      },
  
    Contedorimag: {
      position: 'absolute',
      zIndex: -1,
      alignSelf: 'center',
      opacity: 0.3,
      marginTop: 50,
      

    },


    containerbottom: {

      alignSelf: 'flex-end',
      padding: 10,

    },

    containerbottom2: {

      alignItems: 'center',
      width : '100%',
      padding: 15,


    },

    bottom:{

        borderRadius: 20,
        backgroundColor: '#F2AA1F',
        borderWidth: 1,
        borderColor: '#276E90',
      
    },

    contenedorMecanicos: {

        borderRadius: 20,
        
        borderColor: '#276E90',
        borderWidth: 2,
        height:'40%',
        margin: 20,
    },

    Boxmecanicos: {

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F2AA1F',
        margin: 10,
        
        

    }

});


export default VehiculosConductor2;