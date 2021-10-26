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
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height:250,
       
    },
    textWrapper:{
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
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
        width: 330,
        borderBottomColor: COLORS.grey,

    },
    textInput: {
        width: 280,
        color: COLORS.blue,
        fontSize: 16,
        padding: 16,
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
        marginTop: 30,
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
        marginTop: 40,
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
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.grey,
        opacity: 0.6
    },
    choosePhotoWrapper:{
        marginTop: 10,
        display: 'flex',
        paddingVertical: 30,
        height: 300,
        width: 330,
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
       padding: 20,
       backgroundColor: COLORS.white, 
       width:300, 
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
       fontSize: 18,
       padding: 5,
       fontWeight: '600',
     
   },
   modalHeaderCloseButton:{
      fontSize: 20
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
       width: 100,
       height:100,
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
       alignSelf: 'center',
   },
   avatarItemStyle:{
       flex:1,
       flexDirection: 'row',
       margin: 5,
       justifyContent: 'center',
       alignItems: 'center'
       
   },
   avatarImage:{
       width: 100,
       height: 100,
   },
   modalFooter:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
   },
   cancelButton:{
      width: 130,
      backgroundColor: COLORS.blue,
      padding: 12,
      borderRadius: 40
   },
   buttonText:{ textAlign: 'center', color: COLORS.white, fontSize: 18},
   saveButton:{
      width: 130,
      backgroundColor: COLORS.darkPink,
      padding: 12,
      borderRadius: 40
   },
   formWrapper:{flex:1,width: 300, marginTop: 20},
   labelWrapper:{flex:1, flexDirection: 'row'},
   inputWrapper:{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20},
   nameWrapper:{width: 130},
   inputTextWrapper:{borderBottomColor: COLORS.grey, borderBottomWidth: 0.5},
   labelText:{color: COLORS.blue, fontSize:18,},
   underText:{color: COLORS.blue, fontSize:12, fontWeight: '300', opacity: 0.6},
   inputText:{fontSize: 18, color: COLORS.blue,},
   birthdateWrapper:{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.6, borderBottomColor: COLORS.grey, alignItems: 'center', marginTop: 10, marginBottom: 30},
   nextButton:{paddingVertical: 12, marginTop: 40, marginBottom: 40, width: 350, backgroundColor: COLORS.lightPink, justifyContent: 'center', borderRadius: 40, alignSelf: 'center'},
   nextText:{textAlign: 'center', color: COLORS.white, fontSize: 20},
   linkWrapper:{
       flexDirection:  'row', 
       justifyContent: 'space-between',
       width: 360,
       alignItems: 'center',
       alignSelf: 'center',
       marginTop: 10,
    },
   linkWrapperText:{ fontSize: 16, color: COLORS.grey, opacity: 0.6},
   sexualityWrapper:{width: 300, justifyContent:  'center', alignItems: 'center', top: -10},
   sexualityWrapperBigText:{
       color: COLORS.grey,
        fontSize: 20,
        fontWeight: '600',},
   sexualityWrapperSmallText:{
       marginTop: 10,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.grey,
        opacity: 0.6
   },
   chips:{
       width:  350,
       justifyContent: 'center',
       alignItems: 'center',
       borderWidth: 1,
       borderRadius: 100,
       padding: 12, 
       margin: 5,
       
   },
   chipsText:{
       textAlign: 'center',
       fontSize: 16
   },
   addressTextTitle:{
       textAlign: 'left',
       width: 300,
       color: COLORS.grey,
       fontSize: 20,
       fontWeight: 'bold'
   },
   addressWrapper:{
       paddingHorizontal: 20,
       paddingVertical: 40,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 20
   },
   addressInputWrapper:{
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1,
        width: 300,
        padding: 12,
        marginBottom: 40,
        marginTop: 10
   },
   addressInputText:{
      fontSize: 18, color: COLORS.blue,
   },
   locationButton:{
       marginTop: 50, 
       padding: 12, 
       borderColor: COLORS.grey, 
       borderWidth: 1, 
       width: 300, 
       borderRadius: 100, 
       justifyContent: 'center', 
       alignItems: 'center',
       marginBottom: 280
   },
   disableButton:{
       paddingVertical: 12, marginTop: 40,marginBottom: 40, width: 350, backgroundColor: '#ffcdcc', justifyContent: 'center', borderRadius: 40
   },
   agreement:{color:COLORS.grey},
   agreementBlue:{color:COLORS.blue}
})

export default STYLES;