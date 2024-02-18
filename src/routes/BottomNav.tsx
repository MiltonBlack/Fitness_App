import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();
const BottomNav: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                {/* <MaterialCommunityIcons
                                    name={'chat-outline'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                /> */}
                                <Text style={{ fontSize: 12, color: 'grey' }}>Chat</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                {/* <MaterialCommunityIcons
                                    name={'chat-outline'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                /> */}
                                <Text style={{ fontSize: 12, color: 'grey' }}>Chat</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return(
                            <View style={{
                                top: Platform.OS === "ios" ? -10 : -20,
                                width: Platform.OS === "ios" ? 50 : 60,
                                height: Platform.OS === "ios" ? 50 : 60,
                                borderRadius: Platform.OS === "ios" ? 25 : 30,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? "#FFF123" : "#A0015D"
                            }}>
                                {/* <MaterialCommunityIcons
                                        name={'plus'}
                                        size={24}
                                        color={'white'}
                                    /> */}
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                {/* <MaterialCommunityIcons
                                    name={'chat-outline'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                /> */}
                                <Text style={{ fontSize: 12, color: 'grey' }}>Chat</Text>
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
                                {/* <MaterialCommunityIcons
                                    name={'chat-outline'}
                                    size={24}
                                    color={focused ? '#A0015D' : 'grey'}
                                /> */}
                                <Text style={{ fontSize: 12, color: 'grey' }}>Chat</Text>
                            </View>
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({})