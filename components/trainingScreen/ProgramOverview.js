import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Modal } from 'react-native';

//Components
import NewPorgramButton from '../buttons/NewProgramButton';
import Header from '../Header';
import ProgramDescription from './ProgramDescription';
import Program from './Program'; 
import NewProgramInput from './NewProgramModal/NewProgramInput';

export default function ProgramOverview({ navigation }) {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [myPrograms, setProgram] = useState([
        {
            programDescription:
                <ProgramDescription 
                    programName="Push Pull Legs" 
                    splitLength={7} 
                    focusPoint="Chest/arms" 
                />
        },
        {
            programDescription:
                <ProgramDescription 
                    programName="Winter 2022" 
                    splitLength={8} 
                    focusPoint="Legs" 
                />
        },
    ]);

    function addNewProgramToOverview(name, splitLength, description) {
        setProgram([...myPrograms, 
            {
                programDescription:
                    <ProgramDescription 
                        programName="Tes"
                        splitLength={7} 
                        focusPoint="Halla dette er en test" 
                    />            
            }
        ]);
    }

    function showNewProgramModal() {
        setModalIsVisible(true);
    }

    function exitNewProgramModal() {
        setModalIsVisible(false);
    }
 
    return (
        <View style={styles.container}>
            <Header title="My programs" showGoBackButton={false}/>
            <NewProgramInput 
                showModal={modalIsVisible} 
                exitModal={exitNewProgramModal} 
                addProgram={addNewProgramToOverview} 
            />
            <View style={styles.contentContainer}>
                <ScrollView style={styles.ScrollView}>
                    {myPrograms.map((element, index) => (
                        <View key={index}>
                            {element.programDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <NewPorgramButton title="New program" showModal={showNewProgramModal} />
            </View>
        </View>  

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: "#222831"
    },
    contentContainer: {
        height: 550,
        width: "100%", 
    },
    ScrollView: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        paddingRight: 40,
    },
    buttonContainer: {
        marginTop: 40
    }
});