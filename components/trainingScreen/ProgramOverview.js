import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

//Components
import Button from '../buttons/Button';
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
                    program=""
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
                    program=""
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
                    program=""
                />
        },
    ]);

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
                <Button title="New program"/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        position: "realitve",
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