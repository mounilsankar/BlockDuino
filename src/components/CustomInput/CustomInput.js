import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {Controller} from 'react-hook-form';

const CustomInput = ({ control,
  name,
  placeholder,
  rules = {},
  secureTextEntry}) => {
  return (
    <View style = {styles.container }>
      <Controller
        control = {control}
        name = {name}
        rules = {rules}
        render = {({
        field: {value, onChange, onBlur},
        fieldState: {error}
        }) => (
       <>
        <TextInput
          value = {value}
          onChangeText = {onChange}
          onBlur = {onBlur}
          placeholder = {placeholder}
          style = {[styles.input, {borderColor: error ? 'red' : '#E8E8E8' }]}
          secureTextEntry = {secureTextEntry}
         />
         {error && (
         <Text style ={styles.error}> {error.message || 'Error'} </Text>
         )}
       </>
        )}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10, // Update the border radius value to make the corners rounded
    paddingHorizontal: 10,
    backgroundColor: '#E8E8E8'
  },
  error: {
   color: 'red',
   alignSelf: 'stretch',
   marginLeft: 15
  }
})
export default CustomInput;