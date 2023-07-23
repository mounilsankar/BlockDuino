import React, {useContext, useState, useEffect } from 'react';
import { View, Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import CodeScreen from '../screens/CodeScreen';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if(initializing) return null;
  return (
    <NavigationContainer>
    { !user
    ? <Stack.Navigator screenOptions = {{headerShown : false }}>
        <Stack.Screen name = "LogIn" component = {LogInScreen} />
        <Stack.Screen name = "SignUp" component = {SignUpScreen} />
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} />
        <Stack.Screen name = "SetPassword" component = {SetPasswordScreen} />
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Code" component = {CodeScreen} />
      </Stack.Navigator>
    : <Stack.Navigator screenOptions = {{headerShown : false }}>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Code" component = {CodeScreen} />
        <Stack.Screen name = "LogIn" component = {LogInScreen} />
        <Stack.Screen name = "SignUp" component = {SignUpScreen} />
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} />
        <Stack.Screen name = "SetPassword" component = {SetPasswordScreen} />
      </Stack.Navigator>


    }
    </NavigationContainer>
  );
};

export default Navigation;