import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {View, Text, ImageBackground, Image, Platform, FlatList, Dimensions, LogBox} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Modal, Portal , Provider} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";



const avatarList = [
    {key: 1, avatar: require("./Avatar/artman.png")},
    {key: 2, avatar: require("./Avatar/artwoman.png")},
    {key: 3, avatar: require("./Avatar/Asset-156.png")},
    {key: 4, avatar: require("./Avatar/Asset-175.png")},
    {key: 5, avatar: require("./Avatar/Asset-176.png")},
    {key: 6, avatar: require("./Avatar/Asset-177.png")},
    {key: 7, avatar: require("./Avatar/Asset-178.png")},
    {key: 8, avatar: require("./Avatar/Asset-179.png")},
    {key: 9, avatar: require("./Avatar/Asset-180.png")},
    {key: 10, avatar: require("./Avatar/Asset-179.png")},
    {key: 11, avatar: require("./Avatar/Asset-180.png")},
    {key: 12, avatar: require("./Avatar/artman.png")},
    {key: 13, avatar: require("./Avatar/artwoman.png")},
    {key: 14, avatar: require("./Avatar/Asset-156.png")},
    {key: 15, avatar: require("./Avatar/Asset-175.png")},
    {key: 16, avatar: require("./Avatar/Asset-176.png")},
    {key: 17, avatar: require("./Avatar/Asset-177.png")},
    {key: 18, avatar: require("./Avatar/Asset-178.png")},
    {key: 19, avatar: require("./Avatar/Asset-179.png")},
    {key: 20, avatar: require("./Avatar/Asset-180.png")},
    {key: 21, avatar: require("./Avatar/Asset-179.png")},
    {key: 22, avatar: require("./Avatar/Asset-180.png")},
]

const numberColumns = 3;
const WIDTH = Dimensions.get('window').width;

const Item =({item, onPress, borderColor, borderWidth, icon}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            
            <View style={[STYLES.avatarItemStyle, borderColor, borderWidth]}>
            
                    <Image source={item.avatar} style={STYLES.avatarImage}/>
                    <FontAwesome name={icon} size={20} style={{position:"absolute", top: 0, left: 0, color: "green"}}/>
            </View>
    </TouchableOpacity>
    )
}



export default function CreateAccount({navigation}) { 
  const [visible, setVisible] = useState(false);
  //const [image,  setImage] = useState(null);
  const [selectImage, setSelectImage] = useState(null);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 25};
    
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    useEffect(() => {

        (async () => {
            if(Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== 'granted'){
                    alert('Sorry, we need camera roll permissions to make this work');
                }
            }
        })();
    }, []);

  const formatData = (avatarList, numberColumns) => {
        const totalRows =Math.floor(avatarList.length /numberColumns);
        let totalLastRow = avatarList.length - (totalRows * numberColumns);

        while(totalLastRow !== 0 && totalLastRow !== numberColumns){
            avatarList.push({key: 'blank', empty: true});
            totalLastRow++;
        }

        return avatarList;
  }

    // function ng pickImage()
    let pickImage = async () => {
        let picker = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if(picker.cancelled === true){
            return;
        }

        setSelectImage({localUri:picker.uri});
        hideModal();
        console.log(picker);
       
    }
    
   
    //avatar save
    const savePhoto = () => {
        
       
        console.log("photo saved!");
        hideModal();
        
        
    }
   
   
    return (
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
                            {
                                //if setSelectedImage !== null
                                selectImage !== null? 
                                //selected photo or avatar
                                (<Image source={{uri:(selectImage.localUri !== null) ? selectImage.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg' }} resizeMode={"cover"} style={{height: 150, width: 150, borderRadius: 100}} />)
                                //else
                                :
                                //default photo 
                                (<Image source={require('./Avatar/avatar.png')} resizeMode={"cover"} style={{height: 150, width: 150, borderRadius: 100}} />) 
                            }
                
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

                                <View style={{height: 450}}>
                                    <ScrollView showsVerticalScrollIndicator={true}>
                                        <View style={STYLES.modalContent}>
                                            <View style={STYLES.uploadButtons}>
                                               
                                                <TouchableOpacity onPress={pickImage}>
                                                    <View style={STYLES.cameraUploadButton}>
                                                            <FontAwesome name="image" size={45} color={'#B4CFE4'}/>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{borderBottomColor: COLORS.grey, borderBottomWidth: 0.5, marginTop: 20, marginBottom: 20}}></View>
                                            {/*GALLERY OF AVATARS*/}
                                            <View style={STYLES.avatarGallery}> 
                                               
                                                <FlatList
                                                    scrollEnabled={true}
                                                    data={formatData(avatarList, numberColumns)}
                                                    renderItem={({item}) => {
                                                        const borderColor = item.key === selectImage ?  COLORS.darkPink : COLORS.grey; 
                                                        const borderWidth = item.key === selectImage ?  0.5 : 0.5;
                                                        const icon = item.key === selectImage ? "check-circle" : null ;
                                                        if (item.empty){
                                                            return(
                                                                <View style={{display: 'none'}}></View>
                                                            )
                                                        }
                                                        return (
                                                            <Item item={item}
                                                            onPress={()=>setSelectImage(item.key)}
                                                            icon={icon}
                                                            borderColor={{borderColor}}
                                                            borderWidth={{borderWidth}}
                                                            />
                                                        )
                                                    }}
                                                    keyExtractor={(item)=> item.key}
                                                    numColumns={numberColumns}
                                                    extraData={selectImage}
                                                />
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={STYLES.modalFooter}>
                                        <TouchableOpacity onPress={hideModal}>
                                            <View style={STYLES.cancelButton}>
                                                <Text style={STYLES.buttonText}>Cancel</Text>
                                            </View>
                                        </TouchableOpacity>
                                         <TouchableOpacity onPress={savePhoto}>
                                            <View style={STYLES.saveButton}>
                                                <Text style={STYLES.buttonText}>Save</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>                           
                               
                          
                            </Modal>
                        </Portal>
                    </Provider>
        </SafeAreaView>
    );

}