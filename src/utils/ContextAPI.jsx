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
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [categories, setCategories] = useState(null);
    const [workouts, setWorkouts] = useState(null);
    const Base_URL = 'https://fitness-backend-v8z1.onrender.com/fitness';
    const auth_url = Base_URL + `/api/auth`;
    const category_url = Base_URL + `/api/category`;
    const workout_url = Base_URL + `/api/workout`;

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
            console.log(`${auth_url}` + '/signup');
            axios.post(`${auth_url}` + '/signup', data).then(res => console.log(res.data)).catch(err => setError(err));
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
            await axios.post(`${auth_url}` + '/signin', data).then(res => {
                if (res.data) {
                    setUser(res.data);
                    AsyncStorage.setItem("user", JSON.stringify(res.data));
            }}).catch(err => setError(err));
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }
    
    async function AddWorkout(payload) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.post(`${workout_url}` + '/add', payload, config).then(res => console.log(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function AddCategory(payload) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.post(`${category_url}` + '/add', payload, config).then(res => console.log(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function GetWorkouts() {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.get(`${workout_url}` + '/all', config).then(res => setWorkouts(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    async function GetCategories() {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.get(`${category_url}` + '/all', config).then(res => setWorkouts(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }
    
    async function DeleteWorkout(id) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.delete(`${workout_url}` + `/delete/${id}`, config).then(res => console.log(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }
    
    async function DeleteCategories(id) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            await axios.delete(`${workout_url}` + `/delete/${id}`, config).then(res => console.log(res.data)).catch(err => console.log(err));
        } catch (error) {
            setError(error);
        }
    }

    values = {
        user,
        data,
        error,
        isAdmin,
        setUser,
        setData,
        storeData,
        retrieveData,
        deleteData,
        SignUp,
        SignIn,
        AddWorkout,
        GetWorkouts,
        DeleteWorkout,
        AddCategory,
        GetCategories,
        DeleteCategories
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;