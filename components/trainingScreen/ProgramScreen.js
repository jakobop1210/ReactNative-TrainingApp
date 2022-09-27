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
        {workoutNr: 1, workoutDescription: <WorkoutDescriptionContainer workoutName="Push 1" exercisesCount={6} totalSet={12} />},
        {workoutNr: 2, workoutDescription: <WorkoutDescriptionContainer workoutName="Pull 1" exercisesCount={7} totalSet={14} />},
        {workoutNr: 3, workoutDescription: <WorkoutDescriptionContainer workoutName="Push 2" exercisesCount={7} totalSet={15} />},
        {workoutNr: 4, workoutDescription: <WorkoutDescriptionContainer workoutName="Pull 2" exercisesCount={8} totalSet={16} />},
        {workoutNr: 5, workoutDescription: <WorkoutDescriptionContainer workoutName="Legs" exercisesCount={5} totalSet={10} />},
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
                addProgram={AddWorkoutModal} 
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