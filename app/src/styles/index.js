import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";


const STYLES = StyleSheet.create({
    authWrapper: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        height: 'auto',
    },
    logoWrapper: {
        paddingVertical: 20,
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    logo: {
        width: 200,
        height:200,
       
    },
    textWrapper:{
        marginBottom: 5,
    },
    textText: {
        fontSize: 18,
        color: '#889999',
        textAlign: 'center',
    },
    action:{
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        borderBottomWidth: 0.5,
        width: 300,
        borderBottomColor: COLORS.grey,
    },
    textInput: {
        width: 250,
        color: COLORS.blue,
        fontSize: 16,
        padding: 10,
    },
    forgotWrap:{
        width: 300,
        marginTop: 20,
    },
    forgotText:{
        color: COLORS.lightPink,
        fontSize: 16,
    },
    loginBtn:{
        backgroundColor: COLORS.blue,
        padding: 14,
        borderRadius: 40,
        paddingVertical: 10,
        marginTop: 20,
    },
    loginText:{
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 17,
        
    },
    orWrap:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    line1:{
        height: 0.5,
        width: 80,
        backgroundColor: COLORS.grey,
    },
    orText:{
        color: COLORS.grey,
    },
    line2:{
        height: 0.5,
        width: 80,
        backgroundColor: COLORS.grey,
    },
    authenticationWrap: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:220,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    fbBtn:{
        backgroundColor: '#E0E0E0',
        height: 60,
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 100
    },
    googleBtn : {
         backgroundColor: '#E0E0E0',
        height: 60,
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 100
    },
    noAccountWrap:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },
    noAccountText:{
        color: COLORS.grey,
        fontSize: 16,
    },
    noAccountLink:{
        color: COLORS.lightPink,
        fontSize: 16,
    },
    errorMsg:{
        color: COLORS.red,
        fontSize: 12,
    },
    regWrapper:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header:{
        display: 'flex',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.grey,
    },
    headerLogo:{
        height: 50,
        width: 50,
        backgroundColor: 'transparent',
    },
    createAccountWrap:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    createAccountTitleWrap:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    createAccountTitleText:{
        color: COLORS.grey,
        fontSize: 20,
        fontWeight: '600',
    }, 
    createAccountDesText:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.grey,
    },
    choosePhotoWrapper:{
        marginTop: 10,
        display: 'flex',
        paddingHorizontal: 20,
        paddingVertical: 30,
        height: 300,
        width: 300,
    },
    imageWrapper:{
        alignSelf: 'center',
        width: 180,
        height: 180, 
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.blue,
        overflow: "hidden",
        margin: 0
    },
   addButton: {
       marginTop: 20,
       borderRadius: 100, 
       borderColor: COLORS.blue, 
       borderWidth: 1.5, 
       flex: 1, 
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 16,
       backgroundColor: COLORS.white, 
       margin: 10, 
       width:250, 
       alignSelf: 'center',
       
   },
   addText:{
        color: COLORS.blue,
   },
   modalWrapper:{
       flex: 3,
       padding: 20,
       overflow: 'hidden',
       flexWrap: 'nowrap',
       alignContent: 'center',
      
   },
   modalHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

     
   },
   modalHeaderText:{
       color: COLORS.blue,
       fontSize: 16,
       padding: 5
     
   },
   modalHeaderCloseButton:{
      fontSize: 16
   },
   modalContent:{
    overflow: 'scroll',
    minHeight: 400,
   },
   uploadButtons:{
       marginTop: 10,
       flex:1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
   cameraUploadButton:{
       flex: 1,
       flexDirection: 'row',
       padding: 12,
       backgroundColor: COLORS.blue,
       width: 80,
       height:80,
       margin: 5,
       justifyContent: 'center',
       alignItems: 'center',
   },
   cameraUploadButtonText:{
       color:'#B4CFE4',
   },
   avatarGallery:{
       flex:1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
   avatarItemStyle:{
       flex:1,
       flexDirection: 'row',
       margin: 5,
       justifyContent: 'center',
       alignItems: 'center'
       
   },
   avatarImage:{
       width: 80,
       height: 80,
   },
   modalFooter:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
   },
   cancelButton:{
      width: 100,
      backgroundColor: COLORS.blue,
      padding: 12,
      borderRadius: 20
   },
   buttonText:{ textAlign: 'center', color: COLORS.white},
   saveButton:{
      width: 100,
      backgroundColor: COLORS.darkPink,
      padding: 12,
      borderRadius: 20
   },
   formWrapper:{flex:1,width: 300, paddingHorizontal: 10},
   labelWrapper:{flex:1, flexDirection: 'row'},
   inputWrapper:{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20},
   nameWrapper:{width: 130},
   inputTextWrapper:{borderBottomColor: COLORS.grey, borderBottomWidth: 0.5},
   labelText:{color: COLORS.blue, fontSize:18,},
   underText:{color: COLORS.blue, fontSize:12, fontWeight: '300', opacity: 0.6},
   inputText:{fontSize: 18, color: COLORS.grey,},
   birthdateWrapper:{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.6, borderBottomColor: COLORS.grey, alignItems: 'center', marginTop: 5, marginBottom: 20},
   gender: {textTransform: 'uppercase',  textAlign: 'center'},
   nextButton:{paddingVertical: 20, marginTop: 40, width: 280, backgroundColor: COLORS.lightPink, justifyContent: 'center', borderRadius: 40},
   nextText:{textAlign: 'center', color: COLORS.white, fontSize: 16}
})

export default STYLES;