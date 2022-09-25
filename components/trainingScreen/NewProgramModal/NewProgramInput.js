import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';

//Components
import ProgramDescriptionInput from './ProgramDescriptionInput';
import WorkoutDescriptionInput from './WorkoutDescriptionInput';
import ExitButton from '../../buttons/ExitButton';

export default function NewProgramInput({ showModal, exitModal }) {
    const [inputScreen, setInputScreen] = useState(< ProgramDescriptionInput showNextScreen={goToNextScreen} />);

    function goToNextScreen() {
        setInputScreen(<WorkoutDescriptionInput goBack={showPreviousScreen} exitModal={exitModal} />);
    }

    function showPreviousScreen() {
        setInputScreen(<ProgramDescriptionInput showNextScreen={goToNextScreen} />);
    }

    return (
        <Modal 
            visible={showModal} 
            animationType="fade"
            transparent={true}
        >
            <View style={styles.centeredNewProgramContainer}>
                <View style={styles.newProgramContainer}>
                    <ExitButton exitModal={exitModal} goBack={showPreviousScreen} />
                    <View>
                        <Text style={styles.newProgramHeader}>New program</Text>
                    </View>
                    {inputScreen}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredNewProgramContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    newProgramContainer: {
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
    newProgramHeader: {
        color: "#FFD369",
        fontSize: 25
    },
});