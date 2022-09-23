import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ProgramDescription({ }) {
    const [myProgram, setProgram] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.programTitle}>Push pull legs</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#6B6E74",
        height: 80,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    programTitle: {
        color: "#FFD369",
        fontSize: 20,
        fontWeight: "600"
    }
});