import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/Onboarding';
import Gender from './Onboarding/Gender';
import BodyType from './Onboarding/BodyType';

const Onboarding = ({ navigation }) => {
    const [userData, setUserData] = useState({});

    const handleSelect = (field, value) => {
        setUserData({ ...userData, [field]: value })
    }
    useEffect(()=> {
        handleLogin()
    },[userData]);
    function handleLogin(){
        Object.keys(userData).length === 2 && navigation.navigate('bottomnav')
    } 
    return (
        <View style={styles.container}>
            {Object.keys(userData).length === 0 ? (<Gender onSelect={handleSelect} />) : Object.keys(userData).length === 1 ? (<BodyType onSelect={handleSelect} />) : Object.keys(userData).length === 2 && navigation.navigate('bottomnav')}
        </View>
    )
}

export default Onboarding