import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"
;

const ProfileConductor = () => {


    return(

    <View style={styles.container}>
        {/* {Conductores.map((conductor) => (
        <View key={conductor.id} style={styles.contenedorForm}>
        <Text>{conductor.nombre}</Text>
        <Text>{conductor.Apellido}</Text>
        </View>
        ))} */}

        <Text style={{textAlign:'right', color:'#276E90', fontWeight:'bold', paddingTop: 5, paddingEnd:3}}>Daniel </Text>
        <Text style={{textAlign:'right', color:'#276E90', fontWeight:'bold' }}>Marrugo </Text>
    </View>    
    )

}

const styles = StyleSheet.create({

    container:{

        paddingEnd:40,
        paddingTop:40
        
    }
})


export default ProfileConductor;