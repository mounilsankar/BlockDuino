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
import CustomProject from '../../components/CustomProject';

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
  const handleAddTask = () => {
     // TODO
     navigation.navigate('Code');
    }
  return (
    <ScrollView>
    <CustomHeader/>
    <View style = {styles.container}>
      <View style = {styles.BottomContainer}>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
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
      alignItems: 'center',

   },
   addWrapper: {
       width: 60,
       height: 60,
       backgroundColor: '#FFF',
       borderRadius: 60,
       justifyContent: 'center',
       alignItems: 'center',
       borderColor: '#C0C0C0',
       borderWidth: 1,
     },
   addText: {
     fontSize: 25,
     },
  });
export default HomeScreen