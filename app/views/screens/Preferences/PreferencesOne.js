import React, {useState, useCallback} from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';



const screenGenderList = [
    {key: 0, sgender: 'Women'},
    {key: 1,  sgender: 'Men'},
    {key: 2,  sgender: 'Everyone'},
]

const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[STYLES.chips, backgroundColor, borderColor]}>
                <Text style={[STYLES.chipsText,color]}>{item.sgender}</Text>
            </View>
    </TouchableOpacity>
    )
}


const PreferencesOne = ({navigation}) => {
    const [selectGender, setSelectGender] = useState("");



    return (
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar /> 
            <View style={STYLES.header}>
                <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>   
            <View style={STYLES.createAccountWrap}>
                    <Text>Show me</Text>
                    <Text>What are your preferences for an ideal partner?</Text>
                    {/*chipset for genders*/}
                    <FlatList 
                        scrollEnabled={true}
                        data={screenGenderList}
                        renderItem={({item}) => {
                            const backgroundColor = item.key === selectGender ? COLORS.darkPink : COLORS.white;
                            const borderColor = item.key === selectGender  ? COLORS.darkPink : COLORS.grey;  
                            const color = item.key === selectGender  ? COLORS.white : COLORS.grey;      
                            return (
                                <Item
                                item={item}
                                onPress={()=>setSelectGender(item.key)}
                                backgroundColor={{backgroundColor}}
                                borderColor={{borderColor}}
                                color={{color}}
                                /> 
                            )
                            }}
                        keyExtractor={item=> item.key.toString()}
                        style={{marginTop: 20, marginBottom: -10}}
                    />


                    {/*ranges*/}

                    <Text>Age</Text>
 
                    <Text>Distance</Text>



            </View>

           

            <TouchableOpacity style={STYLES.nextButton} onPress={()=> navigation.navigate('PreferencesTwo')}>
                <Text style={STYLES.nextText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PreferencesOne
