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
        flex: 1,
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
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        width: 300,
    },
    textInput: {
        borderBottomWidth: 0.5,
        width: 220,
        borderBottomColor: COLORS.grey,
        color: COLORS.blue,
        fontSize: 16,
        padding: 5,
    },
    forgotWrap:{
        width: 230,
        alignSelf: 'center',
        marginBottom: 10,
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
    
})

export default STYLES;