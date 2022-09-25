import React, { useState } from 'react';
import { StyleSheet , View, Text, TextInput, ScrollView} from 'react-native';
import CreateProgramButton from '../../buttons/CreateProgramButton';
import ModalGoBackButton from '../../buttons/ModalGoBackButton';
import AddButton from '../../buttons/AddButton';
import RemoveButton from '../../buttons/RemoveButton';

export default function AddWorkoutsInput({ goBack, exitModal, addProgram }) {
    const [workoutInputs, setWorkoutInputs] = useState([
        {
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
                inputLabel: <Text style={styles.inputLabel}>Day {workoutInputs.length + 1}</Text>,
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

    function createNewProgram() {
        exitModal();
        goBack();
        addProgram;
    }

    return (
        <>
            <ModalGoBackButton goBack={goBack} />
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
            <View style={styles.createProgramButtonContainer}>
                <CreateProgramButton createProgram={createNewProgram} />
            </View>
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
    createProgramButtonContainer: {
        position: "absolute",
        bottom: 10
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
    }
});