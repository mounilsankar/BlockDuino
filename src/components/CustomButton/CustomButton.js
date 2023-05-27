import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress = {onPress } style = {styles.container}>
      <Text style = {styles.text}> {text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#12DAAA',
    width: '70%',
    height: 40,
    padding: 5,
    marginLeft: 65,
    alignItems: 'center',
    margin: 40
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',

  },
})
export default CustomButton;