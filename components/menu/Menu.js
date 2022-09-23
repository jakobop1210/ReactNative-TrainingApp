import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens"
import TrainingScreen from "../trainingScreen/TrainingScreen.js";
import NutritionScreen from "../nutritionScreen/NutritionScreen.js";
import ProgressScreen from "../progressScreen/ProgressScreen.js";
import ProfileScreen from "../profileScreen/ProfileScreen.js";

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "#FFD369", height: 90},
            tabBarLabelStyle: {fontSize: 12, fontWeight: "bold"},
            tabBarInactiveTintColor: "#6B6E74",
            tabBarActiveTintColor: "#222831",
          }}>     
          <Tab.Screen name="Training" component={TrainingScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="dumbbell" color={color} size={35} />
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
          <Tab.Screen name="My profile" component={ProfileScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="user" color={color} size={30} />
              )
          }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
} 