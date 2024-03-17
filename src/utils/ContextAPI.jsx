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
    const [error, setError] = useState(null);
    const url = 'https://fitness-backend-v8z1.onrender.com';

    const retrieveData = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("data");
            const currentUser = JSON.parse(savedUser);
            console.log(currentUser);
            setData(currentUser);
        } catch (error) {
            console.log(error);
        }
    }

    const storeData = async (userData) => {
        try {
            await AsyncStorage.setItem("data", JSON.stringify(userData));
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem("data");
        } catch (error) {
            console.log(error);
        }
    }

    function SignUp(name, email, password) {
        const data = {
            name,
            email,
            password
        }
        try {
            axios.post(`http://localhost:4000/fitness/api/auth/signup`, data).then(res => console.log(res.data)).catch(err => setError(err));
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }
    
    async function SignIn(email, password) {
        const data = {
            email,
            password
        }
        try {
            await axios.post(`http://localhost:4000/fitness/api/auth/signin`, data).then(res => {
                if (res.data) {
                    setUser(res.data);
                    AsyncStorage.setItem("user", JSON.stringify(res.data));
            }}).catch(err => setError(err));
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    values = {
        user,
        data,
        error,
        setUser,
        setData,
        storeData,
        retrieveData,
        deleteData,
        SignUp,
        SignIn
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;