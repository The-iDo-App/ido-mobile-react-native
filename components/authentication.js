import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function AuthPage(){
   
        return (
            <View style={styles.authWrapper}>
                <Image source={require('../assets/idoWhite.png')} style={styles.idoLogo} />
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
    }
});