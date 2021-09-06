import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function AuthPage(){
   
        return (
            <View style={styles.authWrapper}>
                <Image source={require('../assets/idoWhite.png')} style={styles.idoLogo} />
                <Text>Log In</Text>
                <Text>Email Address</Text>
                <TextInput style={styles.emailAddress} placeholder={"Email Address"}/>
                <Text>Email Address</Text>
                <TextInput style={styles.emailAddress} placeholder={"Email Address"} />
            </View>
        );
 
  

}

const styles = StyleSheet.create({
    authWrapper: {
        flex: 1,
        backgroundColor: '#F2909A',
        paddingTop: 80,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    idoLogo: {
        marginTop: 80,
        height: 150,
        width: 150,
        resizeMode: 'contain',
    },
    emailAddress: {
        marginTop: 40,
        padding: 12,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 40,
    }
});