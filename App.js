import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

//Screens 
import Header from "./components/Header.js";
import Menu from "./components/menu/Menu.js";


export default function App() {
  return (
    <Menu />
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
