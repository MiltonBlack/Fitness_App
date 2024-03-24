import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

const Exercise = () => {
    const [count, setCount] = useState(1);
    function nextScreen(){
        const dLength = data.length;
        count === dLength && setCount(1);
        return data.find(item => item.id === count);
    }
    const item = nextScreen();
    function addCount() {
        setCount(count + 1);
    }
    return (
        <View style={styles.exerciseContainer}>
            <Image source={require('../assets/icons/weights.png')} style={{ height: 270, width: '100%' }} />
            <Text style={styles.exerciseName}>{item.workout}</Text>
            <Text style={styles.execiseType}>Heel Touch</Text>
            <Text style={styles.exerciseTimer}>Timer</Text>
            <Text style={styles.exerciseDuration}>x {item.repeats}</Text>
            <TouchableOpacity style={styles.done} onPress={addCount}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exercise