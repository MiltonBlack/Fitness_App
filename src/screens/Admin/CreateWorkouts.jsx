import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Admin';

const CreateWorkouts = () => {
    const [state, setState] = useState({
        categoryId: '',
        name: '',
        duration: '',
        calories: '',
        tags: '',
        description: ''
    });
    function addActivity() {
        
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
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Duration</Text>
                <TextInput
                    placeholder={'0'}
                    style={styles.input_placeholder}
                    value={state.duration}
                    onChangeText={(input) => setState({ ...state, duration: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Calories</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.calories}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, calories: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Tags</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.calories}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, tags: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Description</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.calories}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, tags: input })}
                />
            </View>
            <TouchableOpacity onPress={addActivity} style={styles.btn_shape}>
                <Text style={styles.btn_text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateWorkouts