import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TextInput } from 'react-native';

//Components
import ProgramDescriptionInput from './ProgramDescriptionInput';
import DynamicInput from './DynamicInput';
import ExitButton from '../../buttons/ExitButton';
import NextButton from '../../buttons/NextButton';
import CreateButton from '../../buttons/CreateButton';
import ModalGoBackButton from '../../buttons/ModalGoBackButton';

export default function NewProgramModal({ showModal, exitModal, addProgram }) {
    const [isFirstScreen, setIsFirstScreen] = useState(true);
    const [programName, setProgramName] = useState("");
    const [focusPoint, setFocusPoint] = useState("");
    const [splitLength, setSplitLength] = useState(1);

    function changeProgramName(name) {
        setProgramName(name);
    }

    function changeFocusPoint(focus) {
        setFocusPoint(focus)
    }

    function changeSplitLength(splitLength) {
        setSplitLength(splitLength)
    }

    function goToNextScreen() {
        setIsFirstScreen(false);
    }

    function showPreviousScreen() {
        setIsFirstScreen(true);
    }

    function creatingProgram() {
        addProgram(programName, focusPoint, splitLength);
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
                    {!isFirstScreen && <ModalGoBackButton goBack={showPreviousScreen} />}
                    <View>
                        <Text style={styles.newProgramHeader}>New program</Text>
                    </View>
                    {isFirstScreen 
                        ? <ProgramDescriptionInput 
                            showNextScreen={goToNextScreen} 
                            changeName={changeProgramName} 
                            changeFocus={changeFocusPoint} 
                            changeLength={changeSplitLength}
                          />
                        : <DynamicInput 
                            labelText="Day"
                            placeholderText="workout name"
                          />
                    }
                    <View style={styles.buttonContainer}>
                        {isFirstScreen 
                            ? <NextButton showNextScreen={goToNextScreen} />
                            : <CreateButton 
                                text="Create program"
                                onPress={creatingProgram} 
                              />
                        }
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