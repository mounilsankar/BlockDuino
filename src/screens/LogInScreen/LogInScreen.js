import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPressed = () => {
    console.warn("Login");
    //validate user
    navigation.navigate('Home');
  }

  const onSignUpPressed = () => {
    console.warn("Sign up");
    navigation.navigate("SignUp");
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    navigation.navigate("ForgotPassword");

  }
  return (
  <ScrollView>
  <View style = {styles.container}>
        <View style = {styles.topContainer}>
          <Image
             source = {BlockDuinoLogo}
             style = {[styles.BlockDuinoLogo, {height: height * 0.3 }]}
             resizeMode = "contain"
          />
        </View>
        <View style = {styles.BottomContainer}>
        <Text style = {styles.WelcomeBackText}> Welcome Back! </Text>
        <Text style = {styles.InputText}> Username </Text>
        <CustomInput
          placeholder = ""
          value = {username}
          setValue = {setUsername}
          />
        <Text style = {styles.InputText}> Password </Text>
        <CustomInput
          placeholder = ""
          value = {password}
          setValue = {setPassword}
          secureTextEntry
          />
       <View style = {styles.TouchableOpRowStyle}>
       <TouchableOpacity >
         <Text
           style = {styles.NewSignUpText}
           onPress = {onSignUpPressed}
           >
           New? Sign up here
         </Text>
       </TouchableOpacity>
       <TouchableOpacity >
         <Text
           style = {styles.ForgotPasswordText}
           onPress = {onForgotPasswordPressed}
           >
           Forgot Password?
         </Text>
       </TouchableOpacity>
       </View>
       <CustomButton text = 'SignUp' onPress = {onLoginPressed} />
        </View>

  </View>
  </ScrollView>
     );
   };

 const styles = StyleSheet.create ({
   container: {
      flex:1,
      backgroundColor: '#12DAAA',
   },
   topContainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#12DAAA',
   },
   BottomContainer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   BlockDuinoLogo: {
    maxWidth: 300,
    maxHeight: 200,
    },
   WelcomeBackText: {
     paddingVertical: 30,
     textAlign: 'center',
     fontFamily: 'Lato',
     fontStyle: 'normal',
     fontWeight: 600,
     fontSize: 39,
     lineHeight: 47,
     color: '#313536',
   },
   InputText: {
     paddingHorizontal: 15,
     paddingTop: 20,
     paddingBottom: 14,
     fontFamily: 'Inter',
     fontStyle: 'normal',
     fontWeight: 500,
     fontSize: 19,
     lineHeight: 23,
   },
   NewSignUpText: {
      marginLeft: 20,
      width:'100%',
   },
   ForgotPasswordText: {
    textAlign: 'right',
    marginRight: 16,
  },
  TouchableOpRowStyle: {
     flexDirection: 'row',
     paddingTop: 5,
     justifyContent: 'space-between'
  },
  });

export default LogInScreen;