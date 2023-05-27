import React from 'react';
import { View, Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown : false }}>
        <Stack.Screen name = "LogIn" component = {LogInScreen} />
        <Stack.Screen name = "SignUp" component = {SignUpScreen} />
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} />
        <Stack.Screen name = "SetPassword" component = {SetPasswordScreen} />
        <Stack.Screen name = "Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;