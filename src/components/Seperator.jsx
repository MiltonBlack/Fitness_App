import { View, Text } from 'react-native'
import React from 'react'

const Seperator = () => {
    return (
        <View style={{paddingHorizontal: 15}}>
            <View style={{ width: '100%', height: 1, backgroundColor: 'gray', marginVertical: 8 }}>
            </View>
        </View>
    )
}

export default Seperator