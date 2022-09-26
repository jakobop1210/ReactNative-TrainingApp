import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TextInput } from 'react-native';

//Components
import ProgramDescriptionInput from './ProgramDescriptionInput';
import AddWorkoutsInput from './AddWorkoutsInput';
import ExitButton from '../../buttons/ExitButton';
import NextButton from '../../buttons/NextButton';
import CreateProgramButton from '../../buttons/CreateProgramButton';
import ModalGoBackButton from '../../buttons/ModalGoBackButton';

export default function NewProgramInput({ showModal, exitModal, addProgram }) {
    const [inputScreen, setInputScreen] = useState(< ProgramDescriptionInput showNextScreen={goToNextScreen} />);
    const [buttonShowed, setButtonShowed] = useState(<NextButton showNextScreen={goToNextScreen}/>)
    const [goBackButton, setGoBackButtonVisibility] = useState(<></>);

    function goToNextScreen() {
        setInputScreen(<AddWorkoutsInput />);
        setButtonShowed(<CreateProgramButton createProgram={resetWhenCreatingProgram} />);
        setGoBackButtonVisibility(<ModalGoBackButton goBack={showPreviousScreen} />);
    }

    function showPreviousScreen() {
        setInputScreen(<ProgramDescriptionInput />);
        setButtonShowed(<NextButton showNextScreen={goToNextScreen} />);
        setGoBackButtonVisibility(<></>);
    }

    function resetWhenCreatingProgram() {
        addProgram();
        showPreviousScreen();
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
                    <ExitButton exitModal={exitModal} goBack={showPreviousScreen} />
                    {goBackButton}
                    <View>
                        <Text style={styles.newProgramHeader}>New program</Text>
                    </View>
                    {inputScreen}
                    <View style={styles.buttonContainer}>
                        {buttonShowed}
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
    buttonContainer: {
        position: "absolute",
        bottom: 10
    },
});