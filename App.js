import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { ActivityIndicator, View } from 'react-native';
//import {AuthContext} from './components/context';
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
import PreferencesOne from './app/views/screens/Preferences/PreferencesOne';
import Describe from './app/views/screens/Preferences/Describe';
import SportsInterest from './app/views/screens/Preferences/SportsInterest';
import HobbyInterest from './app/views/screens/Preferences/HobbyInterest';
import MusicInterest from './app/views/screens/Preferences/MusicInterest';
import FilmInterest from './app/views/screens/Preferences/FilmInterest';
import PetsInterest from './app/views/screens/Preferences/PetsInterest';
import BookInterest from './app/views/screens/Preferences/BookInterest';
import FoodInterest from './app/views/screens/Preferences/FoodInterest';
import Questions from './app/views/screens/Preferences/Questions';

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
 

  return (
      
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInPage}  title="SignIn"/>
                <Stack.Screen name="SignUp" component={SignUpPage} title="SignUp" />
                <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} title="MainTab"/>
            <Stack.Group>
                <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                <Stack.Screen name="Sexuality" component={Sexuality}/>
                <Stack.Screen name="EmploymentStatus" component={EmploymentStatus}/>
                <Stack.Screen name="Address" component={Address}/>
                <Stack.Screen name="PreferencesOne" component={PreferencesOne}/>
                <Stack.Screen name="Describe" component={Describe}/>
                <Stack.Screen name="SportsInterest" component={SportsInterest} />
                <Stack.Screen name="HobbyInterest" component={HobbyInterest} />
                <Stack.Screen name="MusicInterest" component={MusicInterest} />
                <Stack.Screen name="FilmInterest" component={FilmInterest} />
                <Stack.Screen name="PetsInterest" component={PetsInterest} />
                <Stack.Screen name="BookInterest" component={BookInterest} />
                <Stack.Screen name="FoodInterest" component={FoodInterest} />
                <Stack.Screen name="Questions" component={Questions}/>
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
     
  );
}