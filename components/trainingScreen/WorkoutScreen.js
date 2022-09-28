import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Header from '../Header';
import ExerciseDescription from './ExerciseDescription';
import AddExerciseModal from './AddExercise/AddExerciseModal';
import EditButton from "../buttons/EditButton"
import DoneButton from '../buttons/DoneButton';
import DeleteButton from "../buttons/DeleteButton";
import NewButton from '../buttons/NewButton';

export default function WorkoutScreen({ route }) {
    const workoutName = route.params.name
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [setList, changeSetList]= useState([
        {setNr: 1, reps: "10"},
        {setNr: 2, reps: "10"},
        {setNr: 3, reps: "10"},
    ]);
    const [exercises, setExercise] = useState([
        {
            exerciseNr: Math.random(), 
            exerciseDescription: <ExerciseDescription exerciseName="Incline DB press" setList={setList} />},
    ]);

    function editWorkout() {
        setEditMode(true);
    }

    function doneEditWorkout() {
        setEditMode(false);
    }

    function showAddExerciseModal() {
        setModalIsVisible(true);
    }

    function exitAddExerciseModal() {
        setModalIsVisible(false);
    }

    function addExerciseToScreen(exerciseName) {
        setExercise(workouts => [...workouts, 
            {
                exerciseNr: Math.random(), 
                exerciseDescription: <ExerciseDescription exerciseName={exerciseName} setList={setList} />
            }
        ]);
    }

    function deleteExercise(exerciseNrDeleted) {
        setExercise(exercises => 
            exercises.filter(exercise => {
                return exercise.exerciseNr != exerciseNrDeleted
            }));
    }



    return (
        <View style={styles.container}>
            <Header title={workoutName} showGoBackButton={true}/>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    {editMode && <NewButton title="Add exercise" showModal={showAddExerciseModal}/>}
                    {!editMode && <EditButton edit={editWorkout} />}
                </View>
                <ScrollView style={styles.ScrollView}>
                    {exercises.map((element, index) => (
                        <View key={index}>
                            {editMode && 
                                <DeleteButton 
                                    onDelete={deleteExercise} 
                                    programNrDeleted={element.exerciseNr} 
                                />
                            }
                            {element.exerciseDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                {editMode &&
                    <DoneButton doneEdit={doneEditWorkout}/>
                }
            </View>
            <AddExerciseModal
                showModal={modalIsVisible} 
                exitModal={exitAddExerciseModal} 
                addExercise={addExerciseToScreen}
            />
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
    buttonContainer: {
        height: 70,
        alignItems: "center"
    },
});