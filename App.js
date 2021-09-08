import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../components/context';
import SignInPage from './app/views/screens/SignInScreen';
import SignUpPage from './app/views/screens/SignUpScreen';
import Home from './app/views/screens/HomeScreen';
import Profile from './app/views/screens/ProfileScreen';
import Messaging from './app/views/screens/MessagingScreen';
import Settings from './app/views/screens/SettingsScreen';
import CreateAccount from './app/views/screens/registration-screen/CreateAccount';
import Sexuality from './app/views/screens/registration-screen/Sexuality';
import EmploymentStatus from './app/views/screens/registration-screen/EmploymentStatus';
import Address from './app/views/screens/registration-screen/Address';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function MainTab(){
  return(
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Messaging" component={Messaging}  />
        <Tab.Screen name="Profile" component={Profile}  />
        <Tab.Screen name="Settings" component={Settings}  />
      </Tab.Navigator>
  );
    
  
}




export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  

    const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
      
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
 
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      // console.log('user token: ', userToken);
    }, 1000);
  }, []);


  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }


  return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{header:()=>null}}>
                <Stack.Screen name="SignIn" component={SignInPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                <Stack.Screen name="Sexuality" component={Sexuality}/>
                <Stack.Screen name="EmploymentStatus" component={EmploymentStatus}/>
                <Stack.Screen name="Address" component={Address}/>
            </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
  );
}

