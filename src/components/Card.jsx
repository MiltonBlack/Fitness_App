import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ image, text }) => {
    return (
        <View>
            <Text>{text}</Text>
            <Image src={image} />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        padding: 20,
        flexDirection:'row'
    }
})