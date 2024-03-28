import { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function ContextProvider({ children }) {
    const [user, setUser] = useState();
    const [isAdmin, setIsAdmin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [categories, setCategories] = useState(null);
    const [workouts, setWorkouts] = useState(null);
    const Base_URL = 'https://fitness-backend-mb.onrender.com/fitness';
    const auth_url = Base_URL + `/api/auth`;
    const category_url = Base_URL + `/api/category`;
    const workout_url = Base_URL + `/api/workout`;

    const retrieveData = async () => {
        try {
            const saved = await AsyncStorage.getItem("data");
            const savedUser = await AsyncStorage.getItem("user");
            const savedToken = await AsyncStorage.getItem("token");
            const currentUser = JSON.parse(savedUser);
            const currentToken = JSON.parse(savedToken);
            const currentData = JSON.parse(saved);
            setInfo(currentData);
            setUser(currentUser);
            setToken(currentToken);
        } catch (error) {
            console.log(error);
        }
    }

    const storeData = async (userData) => {
        try {
            await AsyncStorage.setItem("data", JSON.stringify(userData));
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    };

    async function storeToken() {
        try {
            await AsyncStorage.setItem("token", JSON.stringify(token));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem("data");
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("token");
        } catch (error) {
            console.log(error);
        }
    }

    async function SignUp(userName, email, password) {
        setIsLoading(true);
        setSuccess(false);
        const data = {
            userName,
            email,
            password
        }
        try {
            console.log(`${auth_url}` + '/signup');
            await axios.post(`${auth_url}` + '/signup', data).then(res => {
                if (res.data) {
                    setIsLoading(false);
                    setSuccess(true);
                    console.log(res.data)
                }
            }).catch(err => setError(err));
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    async function SignIn(email, password) {
        setIsLoading(true);
        setSuccess(false);
        const data = {
            email,
            password
        }
        try {
            await axios.post(`${auth_url}` + '/signin', data).then(res => {
                if (res.data) {
                    setSuccess(true);
                    setUser(res.data);
                    setToken(res.data.token);
                    setIsAdmin(res.data.isAdmin);
                    AsyncStorage.setItem("user", JSON.stringify(res.data));
                    AsyncStorage.setItem("token", JSON.stringify(res.data.token));
                    setIsLoading(false);
                }
            }).catch(err => setError(err));
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    async function AddWorkout(payload) {
        setIsLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.post(`${workout_url}` + '/add', payload, config).then(res => {
                if (res.data) {
                    setIsLoading(false);
                    console.log(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function AddCategory(payload) {
        setIsLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.post(`${category_url}` + '/add', payload, config).then(res => {
                if (res.data) {
                    setIsLoading(false)
                    console.log(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function GetWorkouts() {
        setIsLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.get(`${workout_url}` + '/all', config).then(res => {
                if (res.data) {
                    setIsLoading(false);
                    setWorkouts(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function GetCategories() {
        setIsLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.get(`${category_url}` + '/all', config).then(res => {
                if (res.data) {
                    setIsLoading(false);
                    setCategories(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function DeleteWorkout(id) {
        setIsLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.delete(`${workout_url}` + `/delete/${id}`, config).then(res => {
                if (res.data) {
                    setIsLoading(false);
                    console.log(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function RemoveCategory(id) {
        setIsLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.delete(`${workout_url}` + `/delete/${id}`, config).then(res => {
                if (res.data) {
                    setIsLoading(false)
                    console.log(res.data)
                }
            }).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    values = {
        user,
        info,
        isLoading,
        error,
        isAdmin,
        workouts,
        categories,
        success,
        setUser,
        setInfo,
        storeData,
        setIsAdmin,
        retrieveData,
        deleteData,
        SignUp,
        SignIn,
        AddWorkout,
        GetWorkouts,
        DeleteWorkout,
        AddCategory,
        GetCategories,
        RemoveCategory
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;