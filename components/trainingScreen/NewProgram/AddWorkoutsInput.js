import React, { useState } from 'react';
import { StyleSheet , View, Text, TextInput, ScrollView} from 'react-native';
import AddButton from '../../buttons/AddButton';
import RemoveButton from '../../buttons/RemoveButton';

export default function AddWorkoutsInput() {
    const [workoutInputs, setWorkoutInputs] = useState([
        {
            inputLabel: <Text style={styles.inputLabel}>Day 1</Text>,
            textInput: <TextInput
                            style={styles.newProgramInput} 
                            placeholder="workout name" 
                            placeholderTextColor="#6B6E74"
                            maxLength={50}
                        />
        }
    ]);

    function addWorkoutInput() {
        setWorkoutInputs(workoutInputs => [...workoutInputs, workoutInputs[0]]);
    }

    function removeWorkoutInput() {
        if (workoutInputs.length > 1) {
            let newWorkoutInputs = [...workoutInputs];
            newWorkoutInputs.splice(-1, 1);
            setWorkoutInputs(newWorkoutInputs);
        }
    }

    return (
        <>
            <View style={styles.addRemoveCotainer}>
                <RemoveButton removeInput={removeWorkoutInput}/>
                <AddButton addInput={addWorkoutInput}/>
            </View>
            <ScrollView style={styles.ScrollView}>
                {workoutInputs.map((element, index) => (
                    <View key={index} style={styles.inputContainer}>
                        {element.inputLabel}
                        {element.textInput}
                    </View>
                ))}  
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    addRemoveCotainer: {
        flexDirection: "row",
        marginTop: 20
    },
    inputContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
        marginRight: 10
    },
    newProgramInput: {
        width: 200,
        padding: 5,
        fontSize: 15,
        color: "#EEEEEE",
        height: 40,
        borderColor: "#6B6E74",
        borderWidth: 1,
        borderRadius: 5,
    }
});