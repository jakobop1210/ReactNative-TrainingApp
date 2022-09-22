import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Navigator from "./routes/menuStack.js";

//Screens 
import Header from "./components/Header.js";
import Menu from "./components/menu/Menu.js";
import Home from "./components/homeScreen/Home.js";
import Training from "./components/trainingScreen/Training.js";
import Progress from "./components/progressScreen/Progress.js";
import Nutrition from "./components/nutritionScreen/Nutrition.js";

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <Header/>
          <Stack.Navigator>
            <Satck.screen
              name="Home"
              component={Home}
            />
            <Satck.screen
              name="Training"
              component={Training}
            />
            <Satck.screen
              name="Progress"
              component={Progress}
            /> 
            <Satck.screen
              name="Nutrition"
              component={Nutrition}
            />
          </Stack.Navigator>
          <Menu/>
        </View> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: "realitve",
    backgroundColor: "#222831"
  },
});
