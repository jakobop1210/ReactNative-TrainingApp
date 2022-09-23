import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Button from '../buttons/Button';
import Header from '../Header';
import ProgramDescription from './ProgramDescription';


export default function Program({programLength, navigation}) {

    return (
        <View style={styles.container}>
            <Header title="Push pull legs"/>
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
});