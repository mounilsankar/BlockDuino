import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container }>
      <TextInput
        value = {value}
        onChangeText = {setValue}
        placeholder = {placeholder}
        style = {styles.input}
        secureTextEntry = {secureTextEntry}
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
    borderRadius: 10, // Update the border radius value to make the corners rounded
    paddingHorizontal: 10,
    backgroundColor: '#E8E8E8'
  }
})
export default CustomInput