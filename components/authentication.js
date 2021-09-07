import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';


export default function AuthPage(){
   
        return (
            <View style={styles.authWrapper}>
                <Image source={require('../assets/idoWhite.png')} style={styles.idoLogo} />

                <View style={styles.formWrapper}>
                    <Text style={styles.txtStyle}>Log In with Email Address</Text>
                    <TextInput style={styles.inputBox} placeholder={"Email Address"} />
                    <Text style={styles.txtStyle}>Password</Text>
                    <TextInput style={styles.inputBox} placeholder={"Password"} />
                    
                    <TouchableOpacity>
                        <View style={styles.logInWrapper}>
                            <Text style={styles.logInText}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
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
    formWrapper: {
        marginTop: 20,
        width: 300,
    },
    inputBox: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 40,
    },
    txtStyle: {
        padding: 8,
        color: '#fff',
    },
    logInWrapper: {
        backgroundColor: '#1381A2',
        width: 300,
        padding: 20,
        paddingHorizontal:20, 
        borderRadius: 40,
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logInText:  {
        color: '#fff',
    }
});