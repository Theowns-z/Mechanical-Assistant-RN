import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import StyledText from '../Styles/StyledText';
import Vehiculos from '../Data/Vehiculos.js';
import IcomComponents from '../IcomComponents';
import { MechanicalContext } from '../../context/MechanicalContext';



const VehiculosConductor2 = ({ navigation }) => {
  const [data, setData] = useState([]);

  const { datos } = useContext(MechanicalContext);

  function traerVehiculos() {
    const url = "https://mechanical-assistant-sb-production.up.railway.app/api/vehiculo/conductor/";

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${datos.token}`
      },
      redirect: 'follow'
    };

    fetch(url + datos.id, requestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error:', error));

  }

  useEffect(() => {
    traerVehiculos();

  },);


  return (

    <View style={styles.container}>

      <StyledText subtitle>
        Tus vehiculos
      </StyledText>

      {
        data.length === 0 ? <StyledText textInfo >No tienes vehiculos registrados</StyledText> : null
      }
      <FlatList
        style={styles.contenedorMecanicos}
        data={data.response}
        keyExtractor={meca => meca.id}
        renderItem={({ item }) => (
          <View style={styles.Boxmecanicos}>
            <StyledText textInfo >Modelo: {item.modelo}</StyledText>
            <StyledText textInfo >Placa: {item.placa}</StyledText>
            <View style={styles.containerbottom}>
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo Servicio", { item })} style={styles.bottom}>
                <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Contactar mecanico</Text>
              </TouchableOpacity>
            </View>

          </View>

        )}

      />

      <View style={styles.containerbottom2}>
        <TouchableOpacity onPress={() => navigation.navigate("Nuevo Vehiculo")} style={styles.bottom}>
          <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Añadir vehiculo</Text>
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
    width: '100%',
    padding: 15,


  },

  bottom: {

    borderRadius: 20,
    backgroundColor: '#F2AA1F',
    borderWidth: 1,
    borderColor: '#276E90',

  },

  contenedorMecanicos: {

    borderRadius: 20,

    borderColor: '#276E90',
    borderWidth: 2,
    height: '40%',
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