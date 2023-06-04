import React from 'react';
import { View, Text, TextInput, Image ,StyleSheet,  TouchableOpacity, FlatList} from 'react-native';
import StyledText from '../Styles/StyledText';
import Vehiculos from '../Data/Vehiculos.js';
import IcomComponents from '../IcomComponents';



const DescriptionService = () => {

return( 
            <View style={styles.container}>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontWeight:'bold'}}></Text>
            <View style={styles.contenedorForm}>
                <Text style={{textAlign:'center', color:'#276E90', margin: 35, fontSize:25, fontWeight:'bold'}}>Nueva solicitud</Text>
                <Text style = {styles.subtitulo2}>Descripcion</Text>
                <TextInput multiline={true}
                 textAlignVertical="top" style = {styles.TextInput} placeholder="Describe tu solicitud"></TextInput> 
                
                <TouchableOpacity  style={styles.button}>
                    <Text style={{textAlign:'center', color:'#276E90'}}>Realizar solicitud</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={{textAlign:'center', color:'#276E90', margin: 40, fontSize:40, fontWeight:'bold'}}>[M.A]</Text>
            <View style = {styles.botonesabajo}>
            <View style={styles.line} />
        <IcomComponents /> 
        </View>
        </View>
        );
        }




        const styles = StyleSheet.create({

        container:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 20,
        height: '100%',

        },

        contenedorForm:{
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        borderColor: '#276E90',
        borderWidth: 2,
        alignSelf: 'center',
        width: '100%',
        },


        botonesabajo: {

            

        },

        subtitulo2: {

        fontSize:15,
        color: '#276E90',
        fontWeight: 'bold',     
        textAlign: 'left',
        marginTop: 10,
        paddingStart: 45,
        },

        TextInput: {
        paddingStart: 40,
        borderRadius: 20,
        borderColor: '#F2AA1F',
        width: '75%',
        height: 100,
        borderWidth: 1,
        marginStart: 40,
        marginTop: 10,
        marginEnd: 40,
        fontSize: 15,


        },

        line: {
            width: '100%',
            height: 1,
            backgroundColor: '#F2AA1F',
            marginVertical: 10,
            
          },

        button: {
        padding: 10,
        paddingStart: 20,
        borderWidth: 1,
        backgroundColor: '#F2AA1F',
        borderColor: '#276E90',
        width: '50%',
        height: 40,
        borderRadius: 20,
        margin: 30,
        alignSelf: 'center',
        },


        });


export default DescriptionService;