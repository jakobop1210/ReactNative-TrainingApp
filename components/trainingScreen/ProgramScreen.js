import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';

//Components
import Header from '../Header';
import WorkoutDescriptionContainer from './WorkoutDescriptionContainer';
import AddWorkoutModal from './AddWorkout/AddWorkoutModal';
import EditButton from "../buttons/EditButton";
import DoneButton from '../buttons/DoneButton';
import DeleteButton from "../buttons/DeleteButton";
import NewButton from '../buttons/NewButton';


export default function ProgramScreen({ navigation, route }) { 
    const programName = route.params.name;
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [workouts, setWorkouts] = useState([
        {
            workoutNr: Math.random(), 
            workoutDescription: <WorkoutDescriptionContainer 
                                    workoutName="Chest/Shoulders" 
                                    exercisesCount={6} 
                                    totalSet={12} 
                                />},
    ]);

    function editPrograms() {
        setEditMode(true);
    }

    function doneEditPrograms() {
        setEditMode(false);
    }

    function showAddWorkoutModal() {
        setModalIsVisible(true);
    }

    function exitAddWorkoutModal() {
        setModalIsVisible(false);
    }

    function addWorkoutToScreen(workoutName) {
        setWorkouts(workouts => [...workouts, 
            {
                workoutNr: Math.random(), 
                workoutDescription: <WorkoutDescriptionContainer 
                                    workoutName={workoutName} 
                                    exercisesCount={0} 
                                    totalSet={0} 
                                />
            }
        ]);
    }

    function deleteWorkout(workoutNrDeleted) {
        setWorkouts(workouts => 
            workouts.filter(workout => {
                return workout.workoutNr != workoutNrDeleted
            }));
    }

    return (
        <View style={styles.container}>
            <Header title={programName} showGoBackButton={true}/>
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    {editMode && <NewButton title="Add workout" showModal={showAddWorkoutModal}/>}
                    {!editMode && <EditButton edit={editPrograms} />}
                </View>
                <ScrollView style={styles.ScrollView}>
                    {workouts.map((element, index) => (
                        <View key={index}>
                            {editMode && 
                                <DeleteButton 
                                    onDelete={deleteWorkout} 
                                    programNrDeleted={element.workoutNr} 
                                />
                            }
                            {element.workoutDescription}
                        </View>
                    ))}  
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                {editMode &&
                    <DoneButton doneEdit={doneEditPrograms}/>
                }
            </View>
            <AddWorkoutModal
                showModal={modalIsVisible} 
                exitModal={exitAddWorkoutModal} 
                addWorkout={addWorkoutToScreen}
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
        height: 50,
        alignItems: "center"
    }
});