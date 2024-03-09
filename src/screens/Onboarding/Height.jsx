import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const Height = ({ onSelect }) => {
  const [height, setHeight] = useState('');
  const handleSelect = (selected) => {
    setHeight(selected);
    onSelect('gender', selected);
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
        <Text style={styles.optionText}>61 to 70</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('80')}>
        <Text style={styles.optionText}>71 to 80</Text>
      </TouchableOpacity>
      {height !== '' && <Button title='Next' />}
    </View>
  )
}

export default Height