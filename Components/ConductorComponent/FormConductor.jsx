import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DropdownButton from '../DropdownButton';

const FormConductor = ({ navigation }) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cedula, setCeddula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("CONDUCTOR");

    const showAlert = (data) => {
        Alert.alert(
            data.message,
            (typeof data.response === 'string') ? data.response : "Registrado",
            [
                {
                    text: 'Aceptar',
                    onPress: () => console.log('Aceptar presionado'),
                    style: 'default',
                },
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelar presionado'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    function Register() {
        let url = 'https://mechanical-assistant-sb-production.up.railway.app/';
        if (role === 'CONDUCTOR') {
            url = url + 'api/conductor/register'
        } else if (role === 'MECANICO') {
            url = url + 'api/mecanico/register'
        }

        const data = {
            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            telefono: telefono,
            direccion: direccion,
            user: {
                email: email,
                password: password,
                role: role,
            }
        };
        console.log(data)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => { showAlert(data) })
            .catch(error => console.log('Error:', error));
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', color: '#276E90', margin: 40, fontWeight: 'bold' }}>MECHANICAL ASSISTANT</Text>
            <ScrollView>
                <View style={styles.contenedorForm}>
                    <Text style={{ textAlign: 'center', color: '#276E90', margin: 35, fontSize: 25, fontWeight: 'bold' }}>Registro</Text>
                    <DropdownButton role={role} setRole={setRole}></DropdownButton>
                    <Text style={styles.subtitulo2}>Correo</Text>
                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.TextInput} placeholder="Ingresar el correo "></TextInput>
                    <Text style={styles.subtitulo2}>Contraseña</Text>
                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.TextInput} placeholder='Ingresar contraseña'></TextInput>
                    <Text onChangeText={(text) => setDir(text)} style={styles.subtitulo2}>Direccion</Text>
                    <TextInput onChangeText={(text) => setDireccion(text)} style={styles.TextInput} placeholder='Ingresar direccion'></TextInput>
                    <Text style={styles.subtitulo2}>Nombre</Text>
                    <TextInput onChangeText={(text) => setNombre(text)} style={styles.TextInput} placeholder="Ingresar nombre "></TextInput>
                    <Text style={styles.subtitulo2}>Apellido</Text>
                    <TextInput onChangeText={(text) => setApellido(text)} style={styles.TextInput} placeholder='Ingresar apellido'></TextInput>
                    <Text style={styles.subtitulo2}>Cedula</Text>
                    <TextInput onChangeText={(text) => setCeddula(text)} style={styles.TextInput} placeholder="Ingresar Cedula "></TextInput>
                    <Text style={styles.subtitulo2}>Numero de telefono</Text>
                    <TextInput onChangeText={(text) => setTelefono(text)} style={styles.TextInput} placeholder='Ingresar telefono'></TextInput>

                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => Register()} style={styles.button}>
                <Text style={{ textAlign: 'center', color: '#276E90' }}

                >Registrarse</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: '#276E90', margin: 40, fontSize: 40, fontWeight: 'bold' }}>[M.A]</Text>
        </View >
    );
}




const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 20,
        height: '100%',
    },

    contenedorForm: {
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        borderColor: '#276E90',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 20,
    },


    subtitulo2: {

        fontSize: 15,
        color: '#276E90',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        paddingStart: 45,
    },

    TextInput: {
        padding: 10,
        paddingStart: 20,
        borderWidth: 1,
        backgroundColor: '#276E90',
        borderColor: '#F2AA1F',
        width: '80%',
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: 'white',
        alignSelf: 'center',


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

export default FormConductor;