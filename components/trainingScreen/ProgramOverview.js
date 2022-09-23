import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

//Components
import Button from '../buttons/Button';
import ProgramDescription from './ProgramDescription';


export default function Training({ }) {
    const [myProgram, setProgram] = useState(0);

    return (
        <>
        <View style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <ProgramDescription />
                <ProgramDescription />
                <ProgramDescription />
                <ProgramDescription />
                <ProgramDescription />
                <ProgramDescription />
            </ScrollView>
        </View>
        <View>
            <Button title="New program"/>
        </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: "100%", 
    },
    ScrollView: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        paddingRight: 40,
    },
});