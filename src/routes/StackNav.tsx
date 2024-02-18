import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/Welcome';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='welcome' component={WelcomeScreen} />
        <Stack.Screen name='signup' component={SignUpScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='bottomnav' component={BottomNav} />
    </Stack.Navigator>
  )
}

export default StackNav

const styles = StyleSheet.create({})