import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Header from '../Header';
import WorkoutDescription from './WorkoutDescription';
import EditButton from "../buttons/EditButton"


export default function Program({ navigation, route }) {
    const { workoutName } = route.params;
    const [workouts, setWorkout] = useState([
        {workoutNr: 1, workoutDescription: <WorkoutDescription workoutName="Push 1" exercisesCount={6} totalSet={12} showWorkout={showWorkout} />},
        {workoutNr: 2, workoutDescription: <WorkoutDescription workoutName="Pull 1" exercisesCount={7} totalSet={14} showWorkout={showWorkout} />},
        {workoutNr: 3, workoutDescription: <WorkoutDescription workoutName="Push 2" exercisesCount={7} totalSet={15} showWorkout={showWorkout} />},
        {workoutNr: 4, workoutDescription: <WorkoutDescription workoutName="Pull 2" exercisesCount={8} totalSet={16} showWorkout={showWorkout} />},
        {workoutNr: 5, workoutDescription: <WorkoutDescription workoutName="Legs" exercisesCount={5} totalSet={10} showWorkout={showWorkout} />},
    ]);

    function showWorkout() {
        navigation.navigate("Workout");
    }

    return (
        <View style={styles.container}>
            <Header title="Progam name"/>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <EditButton />
                </View>
                <ScrollView style={styles.ScrollView}>
                    {workouts.map(item => (
                        <View key={item.workoutNr}>
                            {item.workoutDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        position: "realtive",
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
        height: 40
    }
});