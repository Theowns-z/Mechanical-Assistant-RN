import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import Svg, { Path } from "react-native-svg"
import StyledText from '../Styles/StyledText';
import SvgComponent2 from './SvgComponent2';
import { useEffect, useState } from 'react';
import Mecanicoss from '../Data/Mecanicoss.js';
import { MechanicalContext } from '../../context/MechanicalContext';


const HomeConductor = ({ navigation }) => {
  const [data, setData] = useState([]);

  const { datos } = useContext(MechanicalContext);

  function traerMecanicos() {
    const url = 'https://mechanical-assistant-sb-production.up.railway.app/api/mecanico';

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${datos.token}`
      },
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error:', error));
  }


  useEffect(() => {
    traerMecanicos();
  }, []);



  return (

    <View style={styles.container}>

      <StyledText subtitle>
        Mecanicos
      </StyledText>

      <FlatList
        style={styles.contenedorMecanicos}
        data={data}
        keyExtractor={meca => meca.id}
        renderItem={({ item }) => (
          <View style={styles.Boxmecanicos}>
            <StyledText textInfo >Nombre: {item.nombre} {item.apellido} </StyledText>
            <StyledText textInfo >Especialidad en: {item.especialidad}</StyledText>
            <StyledText textInfo >Calificacion: {item.calificacion}</StyledText>
            <View style={styles.containerbottom}>
              <TouchableOpacity style={styles.bottom}>
                <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Contactar</Text>
              </TouchableOpacity>
            </View>
          </View>

        )}

      />

    </View>

  )



}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',


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
    height: '60%',
    margin: 20,
  },

  Boxmecanicos: {

    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F2AA1F',
    margin: 10,



  }

});


export default HomeConductor;