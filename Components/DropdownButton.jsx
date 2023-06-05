import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const MecanicoDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const ConductorDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <View styles={styles.contenedorbutton}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Rol</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View >
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Mecanico" value="MECANICO" />
            <Picker.Item label="Conductor" value="CONDUCTOR" />
          </Picker>


        </View>
      )}
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
