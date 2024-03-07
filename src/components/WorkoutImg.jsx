import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const WorkoutImg = () => {
    return (
        <View>
            <Image
                style={styles.imgHead}
                source={require('../assets/images/muscles.jpg')}
            />
        </View>
    )
}

export default WorkoutImg

const styles = StyleSheet.create({
    imgHead: {
        width: '100%',
        height: 250
    }
})