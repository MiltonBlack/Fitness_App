import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

const Exercise = () => {
    function nextScreen(){

    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icons/weights.png')} style={{ height: 270, width: '100%' }} />
            <Text style={styles.exerciseName}>Exercise</Text>
            <Text style={styles.execiseType}>Heel Touch</Text>
            <Text style={styles.exerciseTimer}>Timer</Text>
            <Text style={styles.exerciseDuration}>x 20</Text>
            <TouchableOpacity style={styles.done} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exercise