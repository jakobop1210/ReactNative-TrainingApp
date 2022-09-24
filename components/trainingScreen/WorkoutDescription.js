import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutDescription({workoutName, exercisesCount, totalSet, showWorkout}) {
    const navigation = useNavigation();

    return (
        <Pressable 
            onPress={() => {
            navigation.navigate("Workout", {
                name: workoutName
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
                    <Text style={styles.workoutName}>{workoutName}</Text>    
                </View>
                <View style={styles.workoutListContainer}>
                    <Text style={styles.workoutText}>Exercises: {exercisesCount}</Text>
                    <Text style={styles.workoutText}>Total set: {totalSet}</Text>
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
    workoutName: {
        color: "#FFD369",
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 10
    },
    workoutListContainer: {
        flexDirection: "row",
        marginTop: 8,
    },
    workoutText: {
        color: "#EEEEEE",
        marginLeft: 10
    }
});