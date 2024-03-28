import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../utils/ContextAPI';

const SignUpScreen: React.FC = ({ navigation }: any) => {
  const { SignUp, isLoading, success, error } = useAuth();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);
    if (userName === '' && email === '' && password === '') {
      showWarningToast();
    } else if (userName === '' || email === '' || password === '') {
      showWarningToast();
    } else {
      await SignUp(userName, email, password);
    }
    success ? showSuccessToast() : showErrorToast();
    success && setTimeout(() => {
      navigation.replace('login');
    }, 2500);
  };

  function showSuccessToast() {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Account created sucessfully!!'
    })
  }

  function showErrorToast() {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error
    })
  }

  function showWarningToast() {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Input Fields cannot be left blank!!!'
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        {isLoading ? <ActivityIndicator color={'white'} size={10}/> : <Text style={styles.buttonText}>Sign Up</Text>}
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
        <Text style={{ color: 'black' }}>Already have an account? </Text>
        <Text style={{ color: 'blue', fontWeight: '700' }} onPress={() => navigation.navigate('login')}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "black",
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    color: "black",
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
