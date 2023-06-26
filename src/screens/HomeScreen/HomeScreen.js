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
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { AuthContext } from '../../navigation/AuthProvider';
import CustomHeader from '../../components/CustomHeader';

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
    <ScrollView>
    <CustomHeader/>
    <View style = {styles.container}>


      <View style = {styles.BottomContainer}>
        <CustomButton
           text = 'Logout'
           onPress = {onLogoutPressed}
           />
      </View>
    </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create ({
   container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',

   },
   topContainer: {
     flex: 1,
     backgroundColor: '#12DAAA',
   },
   BottomContainer: {
      flex: 2,
      backgroundColor: '#fff',
   },
  });
export default HomeScreen