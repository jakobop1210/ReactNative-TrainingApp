import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

//Components
import Header from '../Header';
import NewPorgramButton from '../buttons/NewProgramButton';
import ProgramDescriptionContainer from './ProgramDescriptionContainer';
import NewProgramModal from './NewProgram/NewProgramModal';

export default function ProgramOverviewScreen() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [myPrograms, setProgram] = useState([
        {
            programDescription:
                <ProgramDescriptionContainer 
                    programName="Push Pull Legs" 
                    splitLength={7} 
                    focusPoint="Chest/arms" 
                />
        }
    ]);

    function addNewProgramToOverview(name, description) {
        setProgram([...myPrograms, 
            {
                programDescription:
                    <ProgramDescriptionContainer 
                        programName="Test"
                        splitLength={7} 
                        focusPoint="Halla test" 
                    />            
            }
        ]);
        console.log(myPrograms.length);
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
            <NewProgramModal 
                showModal={modalIsVisible} 
                exitModal={exitNewProgramModal} 
                addProgram={addNewProgramToOverview} 
            />
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