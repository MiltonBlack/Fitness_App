import { View, Platform } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Report from '../screens/Report';
import AdminExercise from '../screens/AdminExercise';
import Feeds from '../screens/Feeds';
import CreatePost from '../screens/CreatePost';
import { useAuth } from '../utils/ContextAPI';

const Tab = createMaterialBottomTabNavigator();
const BottomNav = () => {
    const { isAdmin } = useAuth();

    const screenOptions = {
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            background: "#faa"
        }
    }

    return (
        <Tab.Navigator
        // screenOptions={screenOptions}
        >
            <Tab.Screen name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={'home'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                />
                            </View>
                        )
                    }
                }} />
            {isAdmin && <Tab.Screen name='Admin'
                component={AdminExercise}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={'news'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                />
                            </View>
                        )
                    }
                }} />}
            {/* <Tab.Screen name='createpost'
                component={CreatePost}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return(
                            <View style={{
                                top: Platform.OS === "ios" ? -10 : -30,
                                width: Platform.OS === "ios" ? 50 : 60,
                                height: Platform.OS === "ios" ? 50 : 60,
                                borderRadius: Platform.OS === "ios" ? 25 : 30,
                                alignItems: "center",
                                position: "absolute",
                                justifyContent: "center",
                                backgroundColor: focused ? "#FFF123" : "#A0015D"
                            }}>
                                <MaterialCommunityIcons
                                        name={'plus'}
                                        size={24}
                                        color={'white'}
                                    />
                            </View>
                        )
                    }
                }} /> */}
            <Tab.Screen name='report'
                component={Report}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={'scale'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                />
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={'cog'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                />
                            </View>
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomNav