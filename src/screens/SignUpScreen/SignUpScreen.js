import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm, Controller} from 'react-hook-form'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const ALPHANUM_REGEX = /^[ A-Za-z0-9_@./#&+-]*$/;


const SignUpScreen = () => {

  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    watch,
    formState : {errors}
   } = useForm();

  const pwd = watch('password');

  const onSignUpPressed = (data) => {
    console.log(data);
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
          name = "username"
          placeholder = ""
          control = {control}
          rules = {{
            required: 'Please key in your Username!',
            pattern: {value: /^[A-Za-z]+$/i,
              message: "Enter a valid Username!"}
            }}
          />
        <Text style = {styles.InputText}> Email </Text>
        <CustomInput
           name = "Email"
           placeholder = ""
           control = {control}
           rules = {{
             required: 'Please key in your Email!',
             pattern: {value: EMAIL_REGEX,
               message: "Enter a valid Email!"}
             }}
          />
        <Text style = {styles.InputText}> Password </Text>
        <CustomInput
          name = "password"
          placeholder = ""
          control = {control}
          rules = {{
            required: 'Please key in your Password!',
            minLength: {value: 6, message: "Password must be between 6-18 characters in length!"},
            maxLength: {value: 18, message: "Password must be between 6-18 characters in length!"},
            pattern: {value: ALPHANUM_REGEX,
              message: "Password contains invalid characters!!"}
            }}
          secureTextEntry
          />
        <Text style = {styles.InputText}> Confirm Password </Text>
        <CustomInput
          name = "ConfirmPassword"
          placeholder = ""
          control = {control}
          rules = {{
            required: 'Please confirm your Password!',
            minLength: {value: 6, message: "Password must be between 6-18 characters in length!"},
            maxLength: {value: 18, message: "Password must be between 6-18 characters in length!"},
            pattern: {value: ALPHANUM_REGEX,
              message: "Password contains invalid characters!"},
            validate: value => value === pwd || 'Passwords do not match',
            }}
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
       <CustomButton text = 'Sign Up' onPress = {handleSubmit(onSignUpPressed)} />
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