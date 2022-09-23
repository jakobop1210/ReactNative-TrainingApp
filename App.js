import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

//Screens 
import Header from "./components/Header.js";
import Menu from "./components/menu/Menu.js";


export default function App() {
  return (
    <>
      <Menu />
    </>
  );
}


