import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SetPasswordScreen = () => {
  const[code, setCode] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onConfirmPressed = () => {
    console.warn("Updated");
    navigation.navigate("Home");
  }

  const onBackPressed = () => {
    console.warn("Back");
    navigation.navigate("LogIn");
  }

  const onResendCodePressed = () => {
      console.warn("ResendCode");
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
          placeholder = ""
          value = {code}
          setValue = {setCode}
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
       <CustomButton text = 'Confirm' onPress = {onConfirmPressed} />
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