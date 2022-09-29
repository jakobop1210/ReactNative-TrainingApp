import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TextInput } from 'react-native';

//Components
import DynamicInput from './DynamicInput';
import ExitButton from '../../buttons/ExitButton';
import CreateButton from '../../buttons/CreateButton';


export default function AddExerciseModal({ showModal, exitModal, addExercise }) {
    const [exerciseName, onChangeExerciseName] = useState("");

    function createExercise() {
        addExercise(exerciseName, inputArray);
        exitModal();
    }

    return (
        <Modal 
            visible={showModal} 
            animationType="fade"
            transparent={true}
        >
            <View style={styles.centeredNewExerciseContainer}>
                <View style={styles.newExerciseContainer}>
                    <ExitButton exitModal={exitModal} />
                    <View>
                        <Text style={styles.newExerciseHeader}>New exercise</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.inputLabel}>Name </Text>
                        <TextInput
                            style={styles.newExerciseInput} 
                            placeholder="exercise name" 
                            placeholderTextColor="#6B6E74"
                            onChangeText={onChangeExerciseName}
                            maxLength={30}
                        />
                    </View>
                    <DynamicInput 
                        labelText="Set"
                        placeholderText="reps"
                    />
                    <View style={styles.buttonContainer}>
                        <CreateButton 
                            text="Add exercise" 
                            onPress={createExercise} 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredNewExerciseContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    newExerciseContainer: {
        flexDirection: "column",
        alignItems: "center",
        height: 400,
        width: 300,
        backgroundColor: "#393E46",
        padding: 10,
        paddingBottom: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5
    },
    newExerciseHeader: {
        color: "#FFD369",
        fontSize: 25
    },
    buttonContainer: {
        position: "absolute",
        bottom: 10
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    },
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
        marginRight: 10
    },
    newExerciseInput: {
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