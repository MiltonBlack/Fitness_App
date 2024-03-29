import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/Onboarding';
import Gender from './Onboarding/Gender';
import BodyType from './Onboarding/BodyType';
import Height from './Onboarding/Height';
import Weight from './Onboarding/Weight';
import Goal from './Onboarding/Goal';
import { useAuth } from '../utils/ContextAPI';

const Onboarding = ({ navigation }) => {
    const [userData, setUserData] = useState({});
    const { storeData } = useAuth();

    const handleSelect = (field, value) => {
        setUserData({ ...userData, [field]: value })
    }

    console.log(userData);
    async function handleComplete() {
        await storeData(userData);
        console.log(userData);
        // Assuming navigation to the home page upon completion
        await navigation.replace('signup');
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
                <TouchableOpacity style={styles.complete} onPress={handleComplete}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Complete</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Onboarding