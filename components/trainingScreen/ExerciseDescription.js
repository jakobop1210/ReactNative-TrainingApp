import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import TrackWeightButton from "../buttons/TrackWeightButton";

export default function ExerciseDescription({exerciseName, setList}) {

    return (
        <Pressable
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
                    <Text style={styles.exerciseName}>{exerciseName}</Text>    
                </View>
                <View style={styles.exerciseListContainer}>
                    {setList.map(item => (
                        <View key={item.setNr}>
                            <Text style={styles.setText}>{item.reps} reps</Text>
                        </View>
                    ))}  
                </View>
                <TrackWeightButton />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#393E46",
        height: 70,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    exerciseName: {
        color: "#FFD369",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 10,
        opacity: 0.9
    },
    exerciseListContainer: {
        flexDirection: "row",
        marginTop: 8,
    },
    setText: {
        color: "#EEEEEE",
        marginLeft: 10
    }
});