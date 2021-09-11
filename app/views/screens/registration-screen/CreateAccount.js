import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Modal, Portal , Provider} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




export default function CreateAccount({navigation}) {

  const [visible, setVisible] = React.useState(false);
  const [image,  setImage] = React.useState('');


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 10};
  
 const takePhotoFromCamera = () => {

 }
 
 const chooseFromLibrary = () => {
    
 }
 
    return(
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar />
            
            <View style={STYLES.header}>
                <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
            
           
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={STYLES.createAccountWrap}>
                    <View style={STYLES.createAccountTitleWrap}>
                         <Text style={STYLES.createAccountTitleText}>Let's set you up an account</Text>
                         <Text style={STYLES.createAccountDesText}>Upload your photo or select with the available avatars</Text>
                    </View>
                    <View style={STYLES.choosePhotoWrapper}>
                        
                        <View style={STYLES.imageWrapper}>
                            <Image source={require('./Avatar/avatar.png')} resizeMode={"cover"} style={{height: 150, width: 150, borderRadius: 100}} />
                        </View>
                        
                        <TouchableOpacity onPress={showModal}>
                            <View style={STYLES.addButton}>
                                <Feather name="plus" size={15} color={COLORS.blue} />
                                <Text style={STYLES.addText} >  &nbsp;Add an avatar or upload a photo</Text>
                            </View>
                        </TouchableOpacity>

                                
                         
                           
                           {/*<Image source={require('../../../src/assets/Avatar PNG/Asset 156.png')}   style={{width: 100, height: 100}}/> */}
                       
                    </View>

                            
                                        
                            
                         

                    {
                        /* <TouchableOpacity onPress={()=>navigation.navigate('Sexuality')}>
                        <Text>Next</Text>
                    </TouchableOpacity>*/
                    }
                    
                    
                </View>
            </ScrollView>
                    <Provider>
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={STYLES.modalWrapper} children={true}>
                                
                                <View style={STYLES.modalHeader}>
                                    <Text style={STYLES.modalHeaderText}>Upload avatar or photo</Text>
                                    <TouchableOpacity onPress={hideModal}>
                                        <Text style={STYLES.modalHeaderCloseButton}>&times;</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        <View style={STYLES.modalContent}>
                                            <View style={STYLES.uploadButtons}>
                                                <TouchableOpacity onPress={()=>takePhotoFromCamera()}>
                                                    <View style={STYLES.cameraUploadButton}>
                                                            <AntDesign name="camera" size={18} color={'#B4CFE4'} />
                                                            <Text style={STYLES.cameraUploadButtonText}>&nbsp;Take photo</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=>chooseFromLibrary()}>
                                                    <View style={STYLES.cameraUploadButton}>
                                                            <FontAwesome name="image" size={18} color={'#B4CFE4'}/>
                                                            <Text style={STYLES.cameraUploadButtonText}>&nbsp;Upload photo</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            {/*GALLERY OF AVATARS*/}

                                        </View>
                                    </ScrollView>
                                </View>
                                                            
                               
                          
                            </Modal>
                        </Portal>
                    </Provider>
        </SafeAreaView>
    );
}