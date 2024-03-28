import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import { useAuth } from '../utils/ContextAPI';

const LoginScreen: React.FC = ({ navigation }: any) => {
    const { SignIn, isLoading, success, error } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        // Implement login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        if (email === '' && password === '') {
            showWarningToast();
        } else if (email === '' || password === '') {
            showWarningToast();
        } else {
            await SignIn(email, password);
        }
        success ? showSuccessToast() : showErrorToast();
        success && setTimeout(() => {
            navigation.replace('bottomnav');
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
            <Text style={styles.title}>Login</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                {isLoading ? <ActivityIndicator size={10} color={'#fff'} /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                <Text style={{ color: 'black' }}>Don't have an account? </Text>
                <Text style={{ color: 'blue', fontWeight: '700' }} onPress={() => navigation.navigate('signup')}>Create One</Text>
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
        marginBottom: 10,
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

export default LoginScreen;