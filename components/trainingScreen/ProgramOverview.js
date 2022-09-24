import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

//Components
import NewPorgramButton from '../buttons/NewProgramButton';
import Header from '../Header';
import ProgramDescription from './ProgramDescription';
import Program from './Program'; 


export default function ProgramOverview({ navigation }) {
    const [myPrograms, setProgram] = useState([
        {
            programNr: 1,
            program: <Program programLength={7}/>, 
            programDescription:
                <ProgramDescription 
                    programName="Push Pull Legs" 
                    splitLength={7} 
                    focusPoint="Chest/arms" 
                    showProgram={showProgram}
                />
        },
        {
            programNr: 2,
            program: <Program programLength={5}/>, 
            programDescription:
                <ProgramDescription 
                    programName="Bro split" 
                    splitLength={5} 
                    focusPoint="Shoulders/arms" 
                    showProgram={showProgram}
                />
        },
        {
            programNr: 3,
            program: <Program programLength={8}/>, 
            programDescription:
                <ProgramDescription 
                    programName="Winter 2022" 
                    splitLength={8} 
                    focusPoint="Legs" 
                    showProgram={showProgram}
                />
        },
    ]);

    function showProgram(name) {
        navigation.navigate("Program", {
            programName: name
        });
    }

    return (
        <View style={styles.container}>
            <Header title="My programs"/>
            <View style={styles.contentContainer}>
                <ScrollView style={styles.ScrollView}>
                    {myPrograms.map(item => (
                        <View key={item.programNr}>
                            {item.programDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <NewPorgramButton title="New program" />
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