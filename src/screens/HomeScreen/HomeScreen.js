import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput
  } from 'react-native';
import BlockDuinoLogo from '../../../assets/images/BlockDuinoLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { AuthContext } from '../../navigation/AuthProvider';

const HomeScreen = () => {
  const {
    control,
    handleSubmit,
    formState : {errors}
  } = useForm();
  const navigation = useNavigation();
  const { logout } = React.useContext(AuthContext);
  const onLogoutPressed = async() => {
    //logout user
    try{
      await logout();
      navigation.navigate('LogIn');
    } catch (error) {
      console.log(error);
    }
   };
  return (
    <View>
      <Text> In Progress </Text>
      <CustomButton
        text = 'Logout'
        onPress = {onLogoutPressed}
       />
    </View>
  )
}
export default HomeScreen