import React, { useState, useContext, useEffect } from 'react';

import { View, Text, Linking, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import StyledText from '../Styles/StyledText';

import Solicitudes from '../Data/Solicitudes.js';
import SvgComponentMecanicIcon from '../SvgComponents/SvgComponentMecanicIcon';
import ProfileMecanico from './ProfileMecanico';
import IcomComponents from '../IcomComponents';
import { MechanicalContext } from '../../context/MechanicalContext';


const HomeMecanico = () => {
  const [data, setData] = useState([]);
  const { datos } = useContext(MechanicalContext);

  function traerSolicitudes() {
    const url = "https://mechanical-assistant-sb-production.up.railway.app/api/servicio/mecanico/1000";

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
    traerSolicitudes();

  },);

  const handleWhatsappPress = (number) => {
    const whatsappNumber = number; // Ingresa el número de WhatsApp al que deseas redirigir

    // Verifica si la aplicación de WhatsApp está instalada en el dispositivo
    Linking.canOpenURL(`whatsapp://send?phone=${whatsappNumber}`).then((supported) => {
      if (supported) {
        // Abre la aplicación de WhatsApp con el número especificado
        return Linking.openURL(`whatsapp://send?phone=${whatsappNumber}`);
      } else {
        console.log("La aplicación de WhatsApp no está instalada en el dispositivo.");
      }
    }).catch((error) => console.log(error));
  };


  return (

    <View style={styles.container}>

      <View style={styles.container}>
        <View style={styles.ContedorNav}>
          <View style={styles.imageMecanic}>
            <SvgComponentMecanicIcon style={{ width: '100%', height: '100%' }} />
          </View>

        </View>
        <Text style={{ paddingTop: 0, textAlign: 'center', color: '#276E90', fontSize: 20, fontWeight: 'bold' }}>
          Solicitudes
        </Text>


        <FlatList
          style={styles.contenedorMecanicos}
          data={data.response}
          keyExtractor={soli => soli.id}
          renderItem={({ item }) => (
            <View style={styles.Boxmecanicos}>
              <StyledText textInfo >Nombre: {item.conductor.nombre} {item.apellido} </StyledText>
              <StyledText textInfo >Modelo: {item.vehiculo.modelo}</StyledText>
              <StyledText textInfo >Placa: {item.vehiculo.placa}</StyledText>
              <StyledText textInfo >Descripcion: {item.descripcion}</StyledText>

              <View style={styles.containerbottom}>
                <TouchableOpacity onPress={handleWhatsappPress} style={styles.bottom}>
                  <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Aceptar</Text>
                </TouchableOpacity>


              </View>

            </View>

          )}

        />


        <View style={styles.line} />
        <IcomComponents />
      </View>


    </View>

  )


}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: '100%',


  },


  ContedorNav: {
    flexDirection: 'row',
    height: '22%',
    width: '100%',

  },

  ProfileMecanico: {

    width: '50%',
    height: '100%',


  },

  imageMecanic: {

    padding: 20,
    paddingTop: 20,
    width: '50%',
    height: '100%',
    justifyContent: 'center',
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

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,

  },

  containerbottom2: {

    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 15,


  },

  bottom: {

    borderRadius: 20,
    backgroundColor: '#F2AA1F',
    borderWidth: 1,
    borderColor: '#276E90',

  },

  bottom2: {

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


export default HomeMecanico;