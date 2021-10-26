import React from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';



const PreferencesTwo = ({navigation}) => {
    return (
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar /> 
            <View style={STYLES.header}>
                <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>   
            <Text>PreferencesTwo</Text>
            {/*Accordion collapse and flatlist (multiple select)*/}

            <TouchableOpacity onPress={()=> navigation.navigate('Questions')}>
                <Text>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PreferencesTwo
