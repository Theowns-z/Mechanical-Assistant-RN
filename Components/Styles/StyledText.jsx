import React from 'react';
import { StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({

    subtitle: {

        paddingTop: 60, 
        textAlign: 'center', 
        color: '#276E90', 
        fontSize: 20, 
        fontWeight: 'bold' 

    },

    textInfo: {

       
        color: '#276E90',
        fontSize: 16,
        padding:5,

    },

   
});

export default function StyledText ({ children,  contenedorMecanicos, textInfo, subtitle}) {

    const textStyles = [
        
        textInfo && styles.textInfo,
        subtitle && styles.subtitle,

    
    ];


return (

    <Text style = {textStyles}>{children}</Text>

)
}


