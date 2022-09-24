import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Header from '../Header';
import ExerciseDescription from './ExerciseDescription';
import EditButton from "../buttons/EditButton"


export default function Workout({ navigation, route }) {
    const workoutName = route.params.name
    const [setList, changeSetLisr]= useState([
        {setNr: 1, reps: "10"},
        {setNr: 2, reps: "10"},
        {setNr: 3, reps: "10"},
    ]);

    const [exercises, setExercise] = useState([
        {exerciseNr: 1, exerciseDescription: <ExerciseDescription exerciseName="Incline DB press" setList={setList} />},
        {exerciseNr: 2, exerciseDescription: <ExerciseDescription exerciseName="Seated cable flies" setList={setList} />},
        {exerciseNr: 3, exerciseDescription: <ExerciseDescription exerciseName="JM smith machine press" setList={setList} />},
        {exerciseNr: 4, exerciseDescription: <ExerciseDescription exerciseName="Cable lateral raises" setList={setList} />},
        {exerciseNr: 5, exerciseDescription: <ExerciseDescription exerciseName="Tricpes cable extensions" setList={setList} />},
        {exerciseNr: 6, exerciseDescription: <ExerciseDescription exerciseName="Seated DB lateral raises" setList={setList} />},
        {exerciseNr: 7, exerciseDescription: <ExerciseDescription exerciseName="Cable rear delt flies" setList={setList} />},
    ]);

    return (
        <View style={styles.container}>
            <Header title={workoutName}/>
            <View style={styles.contentContainer}>
                <View style={styles.editButtonContainer}>
                    <EditButton />
                </View>
                <ScrollView style={styles.ScrollView}>
                    {exercises.map(item => (
                        <View key={item.exerciseNr}>
                            {item.exerciseDescription}
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
        height: 570,
        width: "100%", 
    },
    ScrollView: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 40,
    },
    editButtonContainer: {
        height: 40,
    }
});