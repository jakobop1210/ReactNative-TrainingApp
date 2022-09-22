import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens"
import HomeScreen from "../homeScreen/HomeScreen.js";
import NutritionScreen from "../nutritionScreen/NutritionScreen.js";
import ProgressScreen from "../progressScreen/ProgressScreen.js";
import TrainingScreen from "../trainingScreen/TrainingScreen.js";

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "#FFD369", height: 90},
            tabBarLabelStyle: {fontSize: 12, fontWeight: "bold"},
            tabBarInactiveTintColor: "#656565",
            tabBarActiveTintColor: "black",
          }}>     
          <Tab.Screen name="Home" component={HomeScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={30} />
              )
          }}/>
          <Tab.Screen name="Training" component={TrainingScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="dumbbell" color={color} size={30} />
              )
          }}/>
          <Tab.Screen name="Progress" component={ProgressScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="line-chart" color={color} size={30} />
              )
          }}/>
          <Tab.Screen name="Nutrition" component={NutritionScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="food-variant" color={color} size={30} />
              )
          }}/> 
        </Tab.Navigator>
    </NavigationContainer>
  );
} 