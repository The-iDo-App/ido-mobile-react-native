import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";



const employmentList = [
    {key: 0, status: 'Student'},
    {key: 1,  status: 'Unemployed'},
    {key: 2,  status: 'Employed'},
    {key: 3,  status: 'Self-employed'},
]


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[STYLES.chips, backgroundColor, borderColor]}>
                <Text style={[STYLES.chipsText,color]}>{item.status}</Text>
            </View>
    </TouchableOpacity>
    )
}


export default function EmploymentStatus({navigation}) {
   
    const [selectStatus, setSelectStatus] = useState("");

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
                        <Text style={STYLES.sexualityWrapperBigText}>My employment is</Text>
                        <Text style={STYLES.sexualityWrapperSmallText}>Choose only one employment status</Text>
                    </View>
                    
                    <FlatList 
                        scrollEnabled={true}
                        data={employmentList}
                        renderItem={({item}) => {
                                                const backgroundColor = item.key === selectStatus ? COLORS.darkPink : COLORS.white;
                                                const borderColor = item.key === selectStatus  ? COLORS.darkPink : COLORS.grey;  
                                                const color = item.key === selectStatus  ? COLORS.white : COLORS.grey;      
                                                return (
                                                       <Item
                                                        item={item}
                                                        onPress={()=>setSelectStatus(item.key)}
                                                        backgroundColor={{backgroundColor}}
                                                        borderColor={{borderColor}}
                                                        color={{color}}
                                                       /> 
                                                
                                                        
                                                        
                                                        )
                                                    }}
                        
                        keyExtractor={item=> item.key.toString()}
                        style={{marginTop: 5, marginBottom: -10}}
                    />



                    <TouchableOpacity style={STYLES.nextButton} onPress={()=>navigation.navigate('EmploymentStatus')}>
                        <Text style={STYLES.nextText}>Next</Text>
                    </TouchableOpacity>
                    
                </View>
            
        </SafeAreaView>
    );
}