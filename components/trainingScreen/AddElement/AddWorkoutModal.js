import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TextInput } from 'react-native';

//Components
import ExitButton from '../../buttons/ExitButton';
import CreateButton from '../../buttons/CreateButton';

export default function AddWorkoutModal({ showModal, exitModal, addWorkout }) {
    const [workoutName, onChangeWorkoutName] = useState("");

    function createWorkout() {
        addWorkout(workoutName);
        exitModal();
    }

    return (
        <Modal 
            visible={showModal} 
            animationType="fade"
            transparent={true}
        >
            <View style={styles.centeredNewProgramContainer}>
                <View style={styles.newProgramContainer}>
                    <ExitButton exitModal={exitModal} />
                    <View>
                        <Text style={styles.newProgramHeader}>New workout</Text>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Workout name </Text>
                        <TextInput
                            style={styles.newWorkoutInput} 
                            placeholder="program name" 
                            placeholderTextColor="#6B6E74"
                            onChangeText={onChangeWorkoutName}
                            maxLength={30}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CreateButton 
                            text="Add workout" 
                            onPress={createWorkout} 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredNewProgramContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    newProgramContainer: {
        flexDirection: "column",
        alignItems: "center",
        height: 250,
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
    newProgramHeader: {
        color: "#FFD369",
        fontSize: 25
    },
    buttonContainer: {
        position: "absolute",
        bottom: 10
    },
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10
    },
    newWorkoutInput: {
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