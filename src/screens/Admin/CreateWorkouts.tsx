import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Admin';
import { useAuth } from '../../utils/ContextAPI';

const CreateWorkouts: React.FC = () => {
    const { AddWorkout } = useAuth();
    const [state, setState] = useState({
        categoryId: '',
        name: '',
        duration: '',
        reps:'',
        set:'',
        tags: '',
        description: ''
    });
    
    async function addActivity() {
        state.name !== '' && state.description !== '' && await AddWorkout(state)
    }
    return (
        <View style={styles.container}>
            {/* create a dropdown of select categories to add workouts */}
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
                <Text style={styles.input_title}>Repeats</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.reps}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, reps: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Sets</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.set}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, set: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Tags</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.tags}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, tags: input })}
                />
            </View>
            <View style={styles.input_box}>
                <Text style={styles.input_title}>Description</Text>
                <TextInput
                    style={styles.input_placeholder}
                    value={state.description}
                    placeholder={'0'}
                    onChangeText={(input) => setState({ ...state, description: input })}
                />
            </View>
            <TouchableOpacity onPress={addActivity} style={styles.btn_shape}>
                <Text style={styles.btn_text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateWorkouts