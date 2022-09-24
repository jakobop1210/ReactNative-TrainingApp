import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens 
import ProgramOverview from "./ProgramOverview";
import Program from './Program';
import Workout from './Workout';

const Stack = createNativeStackNavigator();

export default function TrainingScreen() {
    
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
        }}> 
            <Stack.Screen 
              name="ProgramOverview"
              component={ProgramOverview}
            />
            <Stack.Screen 
              name="Program"
              component={Program}
            /> 
            <Stack.Screen 
              name="Workout"
              component={Workout}
            /> 
        </Stack.Navigator>
    );
}

