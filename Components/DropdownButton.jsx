import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownButton = ({ role, setRole }) => {

  return (
    <View styles={styles.contenedorbutton}>
      <View >
        <Picker
          selectedValue={role}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
        >
          <Picker.Item label="Mecanico" value="MECANICO" />
          <Picker.Item label="Conductor" value="CONDUCTOR" />
        </Picker>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorbutton: {
    alignItems: 'center',
    marginTop: 20,

  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: '#276E90',
    width: '50%',
    alignSelf: 'center',

  },
  buttonText: {
    color: '#276E90',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default DropdownButton;
