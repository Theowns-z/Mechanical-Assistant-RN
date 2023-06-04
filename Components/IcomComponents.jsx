import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet,  TouchableOpacity, FlatList} from 'react-native';
import SvgComponentHome from './SvgComponents/SvgComponentHome'
import SvgComponentHistorial from './SvgComponents/SvgComponentHistorial'
import SvgComponentProfile from './SvgComponents/SvgComponentProfile'

const IcomComponents = () => {

return (

<View style = {styles.container}>

<TouchableOpacity>
    <SvgComponentHistorial style = {styles.item}/>
</TouchableOpacity>

<TouchableOpacity>
    <SvgComponentHome style = {styles.item}/>
</TouchableOpacity>

<TouchableOpacity>
    <SvgComponentProfile style = {styles.item}/>
</TouchableOpacity>

</View>



       )

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
     
        
    
    },

    item:{ 

        width: 50,
        height: 50,

    }


})

export default IcomComponents;
