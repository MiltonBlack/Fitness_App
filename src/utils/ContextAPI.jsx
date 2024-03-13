import { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function ContextProvider({ children }) {
    const [user, setUser] = useState();
    const [data, setData] = useState(null);
    const url = ''

    const retrieveUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("user");
            const currentUser = JSON.parse(savedUser);
            console.log(currentUser);
            setData(currentUser);
        } catch (error) {
            console.log(error);
        }
    }

    const storeUser = async (userData) => {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem("user");
        } catch (error) {
            console.log(error);
        }
    }

    function SignUp() {
        try {
            axios.post();
        } catch (error) {
            
        }
    }
    
    function SignIn() {
        try {
            axios.post();
        } catch (error) {
            
        }
    }

    values = {
        user,
        data,
        setUser,
        setData,
        storeUser,
        retrieveUser,
        deleteData
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;