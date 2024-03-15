import React from 'react'
import { Image, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type Props = {
  route: RouteProp<any>;
}

function TrainingDetailed({ route }: Props) {
  let text = route?.params?.work;
  let image = route?.params?.image;
  return (
    <View>
      <Image source={image} style={{ width: '100%', height: 150 }} />
      <Text>Training Detailed</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default TrainingDetailed;