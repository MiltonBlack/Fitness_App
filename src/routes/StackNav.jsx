import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/Welcome';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();
const StackNav = () => {

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff"
    }
  }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='welcome' >
      <Stack.Screen name='welcome' component={WelcomeScreen} />
      <Stack.Screen name='signup' component={SignUpScreen} />
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='bottomnav' component={BottomNav} />
    </Stack.Navigator>
  )
}

export default StackNav

const styles = StyleSheet.create({})