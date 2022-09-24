import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Header from '../Header';
import WorkoutDescription from './WorkoutDescription';
import EditButton from "../buttons/EditButton"


export default function Program({ navigation, route }) { 
    const programName = route.params.name
    const [workouts, setWorkout] = useState([
        {workoutNr: 1, workoutDescription: <WorkoutDescription workoutName="Push 1" exercisesCount={6} totalSet={12} />},
        {workoutNr: 2, workoutDescription: <WorkoutDescription workoutName="Pull 1" exercisesCount={7} totalSet={14} />},
        {workoutNr: 3, workoutDescription: <WorkoutDescription workoutName="Push 2" exercisesCount={7} totalSet={15} />},
        {workoutNr: 4, workoutDescription: <WorkoutDescription workoutName="Pull 2" exercisesCount={8} totalSet={16} />},
        {workoutNr: 5, workoutDescription: <WorkoutDescription workoutName="Legs" exercisesCount={5} totalSet={10} />},
    ]);

    return (
        <View style={styles.container}>
            <Header title={programName}/>
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