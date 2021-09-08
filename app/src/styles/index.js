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
        color: COLORS.yellow,
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
        color: COLORS.yellow,
        fontSize: 16,
    },
    
})

export default STYLES;