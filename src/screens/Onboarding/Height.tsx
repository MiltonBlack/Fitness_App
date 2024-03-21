import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Onboarding';

const Height: React.FC = ({ onSelect }:any) => {
  const [height, setHeight] = useState('');
  const handleSelect = (selected: string) => {
    setHeight(selected);
    onSelect('height', selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Your Height Range</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('50')}>
        <Text style={styles.optionText}>50 Inches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('60')}>
        <Text style={styles.optionText}>51 to 60 Inches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('70')}>
        <Text style={styles.optionText}>61 to 70 Inches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('80')}>
        <Text style={styles.optionText}>71 to 80 Inches</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Height