import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

    setTimeout(() => {
      navigation.replace('signup');
    }, 3000);

  return (
    <ImageBackground
      source={require('../assets/images/fitness.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.logo}>Fitness App</Text>
        <Text style={styles.tagline}>Get Fit. Stay Healthy.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    color: 'white',
  },
});

export default WelcomeScreen;
