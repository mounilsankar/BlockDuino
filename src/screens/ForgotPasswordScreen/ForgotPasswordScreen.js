import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const ForgotPasswordScreen = () => {
  const {
      control,
      handleSubmit,
      formState : {errors}
     } = useForm();

  const {height} = useWindowDimensions();

  const navigation = useNavigation()
  const onSendCodePressed = (data) => {
    console.log(data);
    // logic to send code to email
    navigation.navigate("SetPassword");
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
        <Text style = {styles.ResetPasswordText}> Reset Password </Text>
        <Text style = {styles.Description}>
        A 6 digit code will be sent to your registered email
        </Text>
        <Text style = {styles.InputText}> Username </Text>
        <CustomInput
          name = "username"
          placeholder = ""
          control = {control}
          rules = {{required : 'Please key in your Username!' }}
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
       </View>
       <CustomButton text = 'Send Code' onPress = {handleSubmit(onSendCodePressed)} />
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

export default ForgotPasswordScreen;