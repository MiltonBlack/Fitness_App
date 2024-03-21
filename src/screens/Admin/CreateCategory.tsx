import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Admin';
import { useAuth } from '../../utils/ContextAPI';

const CreateCategory: React.FC = () => {
    const { AddCategory } = useAuth();
    const [state, setState] = useState({
        name: '',
        duration: '',
        calories: '',
        tags: '',
        description: ''
    });

    async function addActivity() {
        state.name !== '' && state.description !== '' && await AddCategory(state)
    }
    return (
        <View style={styles.container}>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Exercise Name</Text>
                <TextInput
                    placeholder={'Exercise Name'}
                    style={styles.input_placeholder}
                    value={state.name}
                    onChangeText={(input) => setState({ ...state, name: input })}
                />
            </View>
            <TouchableOpacity onPress={addActivity} style={styles.btn_shape}>
                <Text style={styles.btn_text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateCategory