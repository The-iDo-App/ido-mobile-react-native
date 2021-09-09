import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, ImageBackground, Image, Modal, Pressable} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";



export default function CreateAccount({navigation}) {

    const [visible, setVisible] = React.useState(false);
    

    return(
        <SafeAreaView style={STYLES.regWrapper}>
             <StatusBar />
            <View style={STYLES.header}>
                <Image source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={STYLES.createAccountWrap}>
                    <View style={STYLES.createAccountTitleWrap}>
                         <Text style={STYLES.createAccountTitleText}>Let's set you up an account</Text>
                         <Text style={STYLES.createAccountDesText}>Upload your photo or select with the available avatars</Text>
                    </View>
                    <View style={STYLES.choosePhotoWrapper}>
                        
                            <View style={STYLES.imageWrapper}>
                                <ImageBackground source={require('../../../src/assets/Avatar PNG/Asset 156.png')}  resizeMode={'cover'} style={STYLES.imagePhoto}/>
                            </View>
                           
                           {/*<Image source={require('../../../src/assets/Avatar PNG/Asset 156.png')}   style={{width: 100, height: 100}}/> */}
                         <TouchableOpacity onPress={() => setVisible(true)}>
                               <View style={STYLES.cameraButton}>
                                    <Feather name="camera" size={30} color={COLORS.blue} />
                               </View>
                           </TouchableOpacity>
                    </View>
                    <Modal animationType="slide" transparent={true} visible={visible}>
                        <View style={STYLES.centeredView}>
                            <View style={STYLES.modalView}>
                                <Text style={STYLES.modalText}>Hello World</Text>
                                <Pressable style={STYLES.closeButton} onPress={()=>setVisible(!visible)}>
                                    <Text>Close Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    {
                        /* <TouchableOpacity onPress={()=>navigation.navigate('Sexuality')}>
                        <Text>Next</Text>
                    </TouchableOpacity>*/
                    }
                    
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}