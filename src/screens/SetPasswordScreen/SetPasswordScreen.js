import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const NUM_REGEX = /^[0-9]+$/;
const ALPHANUM_REGEX = /^[ A-Za-z0-9_@./#&+-]*$/;

const SetPasswordScreen = () => {
  const {
      control,
      handleSubmit,
      watch,
      formState : {errors}
     } = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onConfirmPressed = (data) => {
    console.log(data);
    //logic here
    navigation.navigate("Home");
  }

  const onBackPressed = () => {
    navigation.navigate("LogIn");
  }

  const onResendCodePressed = () => {
      //logic here
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
        <Text style = {styles.ResetPasswordText}> Set Password </Text>
        <Text style = {styles.InputText}> Code </Text>
        <CustomInput
          name = "code"
          placeholder = ""
          control = {control}
          rules = {{
            required: 'Please key in the 6 digit code send to your email!',
            minLength: {value: 6, message: "Incorrect code!"},
            maxLength: {value: 6, message: "Incorrect code!"},
            pattern: {value: NUM_REGEX,
              message: "Incorrect code!"}
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
            pattern: {
              value: ALPHANUM_REGEX,
              message: "Password contains invalid characters!"}
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
            pattern: {
              value: ALPHANUM_REGEX,
              message: "Password must contain no spaces!"},
              validate: value => value === pwd || 'Passwords do not match',
            }}
          secureTextEntry
          />
       <View style = {styles.TouchableOpRowStyle}>
       <TouchableOpacity >
         <Text
           style = {styles.BackText}
           onPress = {onBackPressed}
           >
           Back to Login
         </Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text
           style = {styles.ResendCodeText}
           onPress = {onResendCodePressed}
           >
           Resend Code
         </Text>
       </TouchableOpacity>
       </View>
       <CustomButton text = 'Confirm' onPress = {handleSubmit(onConfirmPressed)} />
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
   ResetPasswordText: {
     paddingVertical: 30,
     textAlign: 'center',
     fontFamily: 'Lato',
     fontStyle: 'normal',
     fontWeight: 600,
     fontSize: 39,
     lineHeight: 47,
     color: '#313536',
   },
   Description: {
     textAlign: 'center',
     fontFamily: 'Lato',
     fontStyle: 'normal',
     fontWeight: 600,
     fontSize: 15,
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
   ResendCodeText: {
    textAlign: 'right',
    marginRight: 16,
  },
  TouchableOpRowStyle: {
     flexDirection: 'row',
     paddingTop: 5,
     justifyContent: 'space-between'
  },
  });

export default SetPasswordScreen;