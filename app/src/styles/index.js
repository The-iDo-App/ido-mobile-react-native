import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";


const STYLES = StyleSheet.create({
    authWrapper: {
        flex: 1,
        backgroundColor: '#F2909A',
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
    idoLogo: {
        marginTop: 30,
        height: 120,
        width: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    formWrapper: {
        width: 300,
        marginTop: 20,
    },
    txtLogIn: {
        color: COLORS.white,
        textAlign: 'center',
        width: 280,
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'normal',
    },
    inputBox: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
        borderRadius: 40,
        color: COLORS.blue,
    },
    txtStyle: {
        padding: 8,
        color: COLORS.white,
        fontSize: 16,
    },
    logInWrapper: {
        backgroundColor: COLORS.blue,
        width: 300,
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 40,
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logInText: {
        color: COLORS.white,
        fontSize: 16,
    },
    authenticationWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
        alignSelf: 'center',
        marginTop: 10,
    },
    facebookWrapper: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    googleWrapper: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    facebookText: {
        fontSize: 24,
        color: COLORS.blue,
    },
    googleText: {
        fontSize: 24,
        color: COLORS.blue,
    },
    orLogInWrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
        marginTop: 20,
    },
    Line1: {
        backgroundColor: COLORS.white,
        width: 80,
        height: 1,
    },
    Line2: {
        backgroundColor: COLORS.white,
        width: 80,
        height: 1,
    },
    orLogInText: {
        color: COLORS.white,
    },
    paginationWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 40,
    },
    noAccountText:{
        color: COLORS.white,
        opacity: 0.5,
    },
    createAccountText:{
        color: COLORS.white,

    }
})

export default STYLES;