import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ProgramDescription({programName, splitLength, focusPoint, showProgram}) {
    const navigation = useNavigation();
   
    return (
        <Pressable 
            onPress={() => {
                navigation.navigate("Program", {
                    name: programName
                })
            }}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.5
                : 1
            },
            styles.button
          ]}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.programName}>{programName}</Text>    
                </View>
                <View style={styles.programListContainer}>
                    <Text style={styles.programText}>Split length: {splitLength} days</Text>
                    <Text style={styles.programText}>FocusPoint: {focusPoint}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#393E46",
        height: 80,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    programName: {
        color: "#FFD369",
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 10
    },
    programListContainer: {
        flexDirection: "row",
        marginTop: 8,
    },
    programText: {
        color: "#EEEEEE",
        marginLeft: 10
    }
});