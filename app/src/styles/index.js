import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";


const STYLES = StyleSheet.create({
    authWrapper: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingVertical: 30,
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
        width: 100,
        height:210,
       
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
        width: 280,
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
        width: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 40
    },
    googleBtn : {
         backgroundColor: '#E0E0E0',
        height: 60,
        width: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 40
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
        backgroundColor: COLORS.lightYellow,
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
        marginTop: 50,
        display: 'flex',
        flex: 3, 
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper:{
        marginTop: 40,
        alignSelf: 'center',
        width: 180,
        height: 180, 
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 3,
        borderColor: COLORS.blue,
        padding: 20,
    },
    cameraButton:{ 
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: '50%',
        flex: 1, 
        justifyContent: "center",
        alignItems:'center',
        width:60,
        padding: 10,
        left: '100%',
        top: '150%',
    },
    imagePhoto : {
        flex: 1,
        width: 135,
        height: 150,
        padding: 20,
        alignSelf: 'center',
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'transparent',
    
        overflow: 'hidden'
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
 
})

export default STYLES;