import { StyleSheet, Text, View } from 'react-native';

//Screens
import Header from "../Header.js";
import ProgramOverview from "./ProgramOverview.js";

export default function Training({ navigation }) {
  return (
      <View style={styles.container}>
          <Header title="My programs"/>
          <ProgramOverview />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    position: "realitve",
    backgroundColor: "#222831"
  },
});