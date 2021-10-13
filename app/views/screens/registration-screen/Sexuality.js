import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";

const SexualOrientationModel = [
    {key: 0, orientation: 'Straight'},
    {key: 1, orientation: 'Gay'},
    {key: 2, orientation: 'Lesbian'},
    {key: 3, orientation: 'Bisexual'},
    {key: 4, orientation: 'Asexual'},
    {key: 5, orientation: 'Demisexual'},
    {key: 6, orientation: 'Pansexual'},
    {key: 7, orientation: 'Queer'},
    {key: 8, orientation: 'Questioning'},
]


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[STYLES.chips, backgroundColor, borderColor]}>
                <Text style={[STYLES.chipsText,color]}>{item.orientation}</Text>
            </View>
    </TouchableOpacity>
    )
}

export default function Sexuality({navigation}) {

    const [selectOrientation, setSelectOrientation] = useState("");


    return(
        <SafeAreaView style={STYLES.regWrapper}>
            
            <StatusBar /> 
            <View style={STYLES.header}>
                <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
             {/* Body */}
             <View style={STYLES.linkWrapper}> 
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text style={STYLES.linkWrapperText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigation.navigate('EmploymentStatus')}>
                            <Text style={STYLES.linkWrapperText}>Skip</Text>
                        </TouchableOpacity>
            </View>
                <View style={STYLES.createAccountWrap}>
                    
                    
                    <View style={STYLES.sexualityWrapper}>
                        <Text style={STYLES.sexualityWrapperBigText}>I identify my sexuality as</Text>
                        <Text style={STYLES.sexualityWrapperSmallText}>Choose only one</Text>
                    </View>
                    
                    <FlatList 
                        scrollEnabled={true}
                        data={SexualOrientationModel}
                        renderItem={({item}) => {
                                                const backgroundColor = item.key === selectOrientation ? COLORS.darkPink : COLORS.white;
                                                const borderColor = item.key === selectOrientation ? COLORS.darkPink : COLORS.grey;  
                                                const color = item.key === selectOrientation ? COLORS.white : COLORS.grey;      
                                                return (
                                                       <Item
                                                        item={item}
                                                        onPress={()=>setSelectOrientation(item.key)}
                                                        backgroundColor={{backgroundColor}}
                                                        borderColor={{borderColor}}
                                                        color={{color}}
                                                       /> 
                                                
                                                        
                                                        
                                                        )
                                                    }}
                        
                        keyExtractor={item=> item.key.toString()}
                        style={{marginTop: 5, marginBottom: -10}}
                    />



                    <TouchableOpacity style={STYLES.nextButton} onPress={()=>navigation.navigate('Address')}>
                        <Text style={STYLES.nextText}>Next</Text>
                    </TouchableOpacity>
                    
                </View>
            
        </SafeAreaView>
    );
}