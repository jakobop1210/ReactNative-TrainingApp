import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

//Components
import Header from '../Header';
import ProgramDescriptionContainer from './ProgramDescriptionContainer';
import NewProgramModal from './NewProgram/NewProgramModal';
import NewPorgramButton from '../buttons/NewProgramButton';
import EditButton from "../buttons/EditButton";
import DoneButton from '../buttons/DoneButton';
import DeleteButton from "../buttons/DeleteButton";

export default function ProgramOverviewScreen() {
    const newProgramButton = <NewPorgramButton title="New program" showModal={showNewProgramModal} />;
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [bottomScreenButton, setBottomScreenButton] = useState(newProgramButton);
    const [myPrograms, setProgram] = useState([
        {
            programNr: Math.random(),
            programDescription:
                <ProgramDescriptionContainer 
                    programName="Push Pull Legs" 
                    splitLength={7} 
                    focusPoint="Chest/arms" 
                />
        }
    ]);

    function addNewProgramToOverview(name, description) {
        setProgram(myPrograms => [...myPrograms, 
            {
                programNr: Math.random(),
                programDescription: <ProgramDescriptionContainer 
                        programName="Push Pull Legs" 
                        splitLength={7} 
                        focusPoint="Chest/arms"
                    /> 
            }
        ]);
    }

    function deleteProgram(programNrDeleted) {
        setProgram(myPrograms => 
            myPrograms.filter(program => {
                return program.programNr != programNrDeleted
            }));
    }

    function showNewProgramModal() {
        setModalIsVisible(true);
    }

    function exitNewProgramModal() {
        setModalIsVisible(false);
    }

    function editPrograms() {
        setEditMode(true);
        setBottomScreenButton(<DoneButton doneEdit={doneEditPrograms}/>);
    }

    function doneEditPrograms() {
        setEditMode(false);
        setBottomScreenButton(newProgramButton);
    }
 
    return (
        <View style={styles.container}>
            <Header title="My programs" showGoBackButton={false}/>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    {!editMode && <EditButton edit={editPrograms} />}
                </View>
                <ScrollView style={styles.ScrollView}>
                    {myPrograms.map((element, index) => (
                        <View key={index}>
                            {editMode && 
                                <DeleteButton 
                                    onDelete={deleteProgram} 
                                    programNrDeleted={element.programNr} 
                                />
                            }
                            {element.programDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                {bottomScreenButton}
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
        position: "relative",
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
        paddingLeft: 20,
        paddingRight: 40,
    },
    buttonContainer: {
        height: 50,
    }
});