import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';


const SignUpScreen = () => {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onSignUpPressed = () => {
    console.warn("Created");
    //logic to validate
    navigation.navigate("Home");
  }

  const onBackPressed = () => {
    console.warn("Back");
    navigation.navigate("LogIn");
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
        <Text style = {styles.CreateAccountText}> Create Account </Text>
        <Text style = {styles.InputText}> Username </Text>
        <CustomInput
          placeholder = ""
          value = {username}
          setValue = {setUsername}
          />
        <Text style = {styles.InputText}> Email </Text>
        <CustomInput
          placeholder = ""
          value = {email}
          setValue = {setEmail}
          />
        <Text style = {styles.InputText}> Password </Text>
        <CustomInput
          placeholder = ""
          value = {password}
          setValue = {setPassword}
          secureTextEntry
          />
        <Text style = {styles.InputText}> Confirm Password </Text>
        <CustomInput
          placeholder = ""
          value = {confirmPassword}
          setValue = {setConfirmPassword}
          secureTextEntry
          />

       <TouchableOpacity >
         <Text
           style = {styles.BackText}
           onPress = {onBackPressed}
           >
           Already have an account? Back to Login
         </Text>
       </TouchableOpacity>
       <CustomButton text = 'Signup' onPress = {onSignUpPressed} />
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
     flex: 0.5,
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
   CreateAccountText: {
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
   BackText: {
      marginLeft: 20,
      width:'100%',
   },

  TouchableOpRowStyle: {
     flexDirection: 'row',
     paddingTop: 5,
     justifyContent: 'space-between'
  },
  });

export default SignUpScreen;