import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
type Props = {
  to: string;
  data: any;
}
type NavProps = {
  navigation: {
    navigate: NavigationProp<ReactNavigation.RootParamList>
  };
}
const navigation = useNavigation<NavProps>();
const Button: React.FC<Props> = ({ to, data }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 18,
        backgroundColor: 'blue',
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 9,
        marginBottom: 5
      }}
      // onPress={() => navigation.navigate(to, data)}
    >
      <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Start</Text>
    </TouchableOpacity>
  )
}

export default Button