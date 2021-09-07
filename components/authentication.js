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
                
                <View style={styles.orLogInWrapper}>
                    <View style={styles.Line1}></View>
                    <Text style={styles.orLogInText}>OR LOG IN WITH</Text>
                    <View style={styles.Line2}></View>
                </View>

                {/*Authentication buttons to Google and Facebook*/}
                <View style={styles.authenticationWrapper}>
                    
                    <TouchableOpacity>
                        <View style={styles.facebookWrapper}>
                            <Text style={styles.facebookText}>f</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.googleWrapper}>
                            <Text style={styles.googleText}>G</Text>
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
    },
    authenticationWrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        marginTop: 10,
    },
    facebookWrapper: {
        width: 60, 
        height: 60,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        borderRadius: 40,
    },
    googleWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    facebookText: {
        fontSize: 24,
        color: '#1381A2',
    },
    googleText: {
        fontSize: 24,
        color: '#1381A2',
    },
    orLogInWrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
    },
    Line1: {
        backgroundColor: '#fff',
        width: 100,
        height: 1,
    },
    Line2: {
        backgroundColor: '#fff',
        width: 100,
        height: 1,
    },
    orLogInText:{
        color: '#fff',
    }
});