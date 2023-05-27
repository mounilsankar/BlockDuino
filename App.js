import React from 'react';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import SetPasswordScreen from './src/screens/SetPasswordScreen';
import Navigation from './src/navigation';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
       <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
