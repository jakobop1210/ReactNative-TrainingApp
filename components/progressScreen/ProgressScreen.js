import { StyleSheet, Text, View } from 'react-native';

//Screens
import Header from "../Header.js";

export default function ProgressScreen({ navigation }) {
  return (
      <View style={styles.container}>
          <Header title="Progress"/>
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