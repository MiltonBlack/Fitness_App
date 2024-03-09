import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Onboarding'

const Gender = ({ onSelect }) => {
  const [gender, setGender] = useState('');
  const handleSelect = (selected) => {
    setGender(selected);
    onSelect('gender', selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose your Gender</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Male')}>
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Female')}>
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
      {gender !== '' && <Button title='Next' />}
    </View>
  )
}

export default Gender