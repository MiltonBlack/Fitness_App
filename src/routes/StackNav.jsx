import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/Welcome';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import BottomNav from './BottomNav';
import Personnalized from '../screens/Personnalized';
import BodyBuilding from '../screens/BodyBuilding';
import HIIT from '../screens/HIIT';
import ButtNHips from '../screens/ButtNHips';
import Yoga from '../screens/Yoga';
import Onboarding from '../screens/Onboarding';
import Gender from '../screens/Onboarding/Gender';
import BodyType from '../screens/Onboarding/BodyType';
import TrainingDetailed from '../screens/TrainingDetailed'
import Exercise from '../screens/Exercise';
import CreateCategory from '../screens/Admin/CreateCategory';
import CreateWorkouts from '../screens/Admin/CreateWorkouts';
import DeleteCategory from '../screens/Admin/DeleteCategory';
import DeleteWorkouts from '../screens/Admin/DeleteWorkouts';
import AdminExercise from '../screens/AdminExercise';
import Profile from '../screens/Profile'
import Equipment from '../screens/Equipment'

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
      <Stack.Screen name='personnalized' component={Personnalized} />
      <Stack.Screen name='bodybuilding' component={BodyBuilding} />
      <Stack.Screen name='equipment' component={Equipment} />
      <Stack.Screen name='hiit' component={HIIT} />
      <Stack.Screen name='buttnhips' component={ButtNHips} />
      <Stack.Screen name='yoga' component={Yoga} />
      <Stack.Screen name='bottomnav' component={BottomNav} />
      <Stack.Screen name='gender' component={Gender} />
      <Stack.Screen name='bodytype' component={BodyType} />
      <Stack.Screen name='onboarding' component={Onboarding} />
      <Stack.Screen name='trainingdetailed' component={TrainingDetailed} />
      <Stack.Screen name='exercise' component={Exercise} />
      <Stack.Screen name='category' component={CreateCategory} />
      <Stack.Screen name='workouts' component={CreateWorkouts} />
      <Stack.Screen name='deletecat' component={DeleteCategory} />
      <Stack.Screen name='delwork' component={DeleteWorkouts} />
      <Stack.Screen name='admin' component={AdminExercise} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNav