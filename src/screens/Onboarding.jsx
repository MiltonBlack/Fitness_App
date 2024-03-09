import { Button, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Onboarding';
import Gender from './Onboarding/Gender';
import BodyType from './Onboarding/BodyType';
import Height from './Onboarding/Height';
import Weight from './Onboarding/Weight';
import Goal from './Onboarding/Goal';

const Onboarding = ({ navigation }) => {
    const [userData, setUserData] = useState({});

    const handleSelect = (field, value) => {
        setUserData({ ...userData, [field]: value })
    }

    function handleComplete() {
        // Assuming navigation to the home page upon completion
        navigation.navigate('bottomnav');
    }

    return (
        <View style={styles.container}>
            {Object.keys(userData).length === 0 ? (
                <Gender onSelect={handleSelect} />
            ) : Object.keys(userData).length === 1 ? (
                <BodyType onSelect={handleSelect} />
            ) : Object.keys(userData).length === 2 ? (
                <Height onSelect={handleSelect} />
            ) : Object.keys(userData).length === 3 ? (
                <Weight onSelect={handleSelect} />
            ) : Object.keys(userData).length === 4 ? (
                <Goal onSelect={handleSelect} />
            ) : (
                <Button title="Complete" onPress={handleComplete} />
            )}
        </View>
    )
}

export default Onboarding