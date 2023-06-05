import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import IcomComponents from '../IcomComponents';
import StyledText from '../Styles/StyledText';

import Solicitudes from '../Data/Solicitudes.js';
import SvgComponentMecanicIcon from '../SvgComponents/SvgComponentMecanicIcon';
import ProfileMecanico from './ProfileMecanico';


const ReadyServices = () => {


  return (

    <View style={styles.container}>
      <View style={styles.ContedorNav}>
        <View style={styles.imageMecanic}>
          <SvgComponentMecanicIcon style={{ width: '100%', height: '100%' }} />
        </View>

        <View style={styles.ProfileMecanico}>
          <ProfileMecanico />
        </View>
      </View>
      <Text style={{ paddingTop: 0, textAlign: 'center', color: '#276E90', fontSize: 20, fontWeight: 'bold' }}>
        Solicitudes aceptadas
      </Text>


      <FlatList
        style={styles.contenedorMecanicos}
        data={data.response}
        keyExtractor={soli => soli.id}
        renderItem={({ item }) => (
          <View style={styles.Boxmecanicos}>
            <StyledText textInfo >Modelo: {item.modelo}</StyledText>
            <StyledText textInfo >Placa: {item.placa}</StyledText>
            <StyledText textInfo >Descripcion: {item.descripcion}</StyledText>

            <View style={styles.containerbottom}>
              <TouchableOpacity style={styles.bottom}>
                <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Eliminar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bottom2}>
                <Text style={{ color: '#276E90', fontSize: 16, textAlign: 'right', margin: 10 }}>Servicio realizado</Text>
              </TouchableOpacity>
            </View>

          </View>

        )}

      />


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

export default ReadyServices;