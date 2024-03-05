import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Report from '../screens/Report';
import Feeds from '../screens/Feeds';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();
const BottomNav = () => {
    return (
        <Tab.Navigator>
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
                                {/* <Text style={{ fontSize: 12, color: 'grey' }}>Chat</Text> */}
                            </View>
                        )
                    }
                }} />
            {/* <Tab.Screen name='Feed'
                component={Feeds}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons
                                    name={'news'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                />
                                {/* <Text style={{ fontSize: 12, color: 'grey' }}>Feed</Text> */}
                            {/* </View>
                        )
                    }
                }} />
            <Tab.Screen name='createpost'
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
                                {/* <Text style={{ fontSize: 12, color: 'grey' }}>Report</Text> */}
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
                                {/* <Text style={{ fontSize: 12, color: 'grey' }}>Profile</Text> */}
                            </View>
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({})