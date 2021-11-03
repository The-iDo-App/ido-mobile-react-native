import React from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';



const SportsInterest = ({navigation}) => {
    return (
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar /> 
            <View style={STYLES.header}>
                     <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
               
            

            <View style={STYLES.createAccountWrap}>
                <View style={STYLES.createAccountTitleWrap}>
                    <Text style={STYLES.createAccountTitleText}>Choose your interests!</Text>
                    <Text style={STYLES.createAccountDesText}>Choose at least five interests in each sections</Text>
                </View>
                
                {/*Accordion collapse and flatlist (multiple select)*/}
            </View>
            

            <TouchableOpacity style={STYLES.nextButton} onPress={()=> navigation.navigate('Questions')}>
                <Text style={STYLES.nextText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SportsInterest
