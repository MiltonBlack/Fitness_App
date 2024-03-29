import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Onboarding'

const Gender: React.FC = ({ onSelect }: any) => {
  const [gender, setGender] = useState('');
  const handleSelect = (selected: string) => {
    setGender(selected);
    onSelect('gender', selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your Gender</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Male')}>
        <Image source={require('../../assets/icons/weights.png')} style={{height:70, width: 70}}/>
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Female')}>
        <Image source={require('../../assets/icons/weights.png')} style={{height:70, width: 70}}/>
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Gender