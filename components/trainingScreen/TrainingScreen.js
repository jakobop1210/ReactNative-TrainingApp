import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens 
import ProgramOverviewScreen from "./ProgramOverviewScreen";
import ProgramScreen from './ProgramScreen';
import WorkoutScreen from './WorkoutScreen';

const Stack = createNativeStackNavigator();

export default function TrainingScreen() {
    
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
        }}> 
            <Stack.Screen 
              name="ProgramOverviewScreen"
              component={ProgramOverviewScreen}
            />
            <Stack.Screen 
              name="ProgramScreen"
              component={ProgramScreen}
            /> 
            <Stack.Screen 
              name="WorkoutScreen"
              component={WorkoutScreen}
            /> 
        </Stack.Navigator>
    );
}

