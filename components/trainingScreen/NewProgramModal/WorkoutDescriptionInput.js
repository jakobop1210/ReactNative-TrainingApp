import React, { useState } from 'react';
import { StyleSheet , View, Text, TextInput, ScrollView} from 'react-native';
import CreateProgramButton from '../../buttons/CreateProgramButton';
import ModalGoBackButton from '../../buttons/ModalGoBackButton';
import AddButton from '../../buttons/AddButton';
import RemoveButton from '../../buttons/RemoveButton';

export default function WorkoutDescriptionInput({ goBack, exitModal }) {
    const [workoutInputs, setWorkoutInputs] = useState([
        {
            workoutNr: 1, 
            inputLabel: <Text style={styles.inputLabel}>Day 1</Text>,
            textInput: <TextInput
                            style={styles.newProgramInput} 
                            placeholder="workout name" 
                        />
        }
    ]);

    function addWorkoutInput() {
        setWorkoutInputs([...workoutInputs, 
            {
                workoutNr: workoutInputs.length++, 
                inputLabel: <Text style={styles.inputLabel}>Day {workoutInputs.length++}</Text>,
                textInput: <TextInput
                            style={styles.newProgramInput} 
                            placeholder="workout name" 
                            />
            }
        ]);
    }

    function removeWorkoutInput() {
        let newWorkoutInputs = [...workoutInputs];
        newWorkoutInputs.splice(-1, 1);
        setWorkoutInputs(newWorkoutInputs);
    }

    function createProgram() {
        exitModal();
        goBack();
    }

    return (
        <>
            <ModalGoBackButton goBack={goBack} />
            <View style={styles.addRemoveCotainer}>
                <RemoveButton removeInput={removeWorkoutInput}/>
                <AddButton addInput={addWorkoutInput}/>
            </View>
            <ScrollView style={styles.ScrollView}>
                {workoutInputs.map(item => (
                    <View key={item.workoutNr} style={styles.inputContainer}>
                        {item.inputLabel}
                        {item.textInput}
                    </View>
                ))}  
            </ScrollView>
            <View style={styles.createProgramButtonContainer}>
                <CreateProgramButton createProgram={createProgram} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    addRemoveCotainer: {
        flexDirection: "row",
        marginTop: 10
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
        height: 35,
        backgroundColor: "#EEEEEE",
        borderRadius: 5,
    },
    createProgramButtonContainer: {
        position: "absolute",
        bottom: 10
    }
});