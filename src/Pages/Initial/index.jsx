import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Initial() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    easing="ease-in-out"
                    source={require('../../Assets/img/hospital.png')}
                    resizeMode="contain"
                    style={{height: 200}}
                />
            </View>

            <Animatable.View
                animation="fadeInUp"
                easing="ease-in-out"
                delay={800}
                style={styles.containerForm}
            >
                <View style={styles.texts}>
                    <Text style={styles.title}>JLG</Text>
                    <Text style={styles.subtitle}>Clinica</Text>
                </View>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('SignIn') }
                    style={styles.button}
                >
                    <Text style={styles.buttonContent}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ad3af'
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        fontWeight: 'bold'
    },
    texts: {
        flex: 1
    },
    title: {
        color: '#000',
        fontSize: 70,
        marginTop: '10%',
        textAlign: 'center',
    },
    subtitle: {
        color: '#000',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        opacity: .3
    },
    button: {
        backgroundColor: '#7ad3af',
        marginBottom: '30%',
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 100,
        fontWeight: 900,
    },
    buttonContent: {
        fontSize: 30,
        color: '#fff'
    }
})