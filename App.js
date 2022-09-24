import Menu from "./components/Menu";
import Header from "./components/Header";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
        <Menu/>
    </NavigationContainer>
  );
}


