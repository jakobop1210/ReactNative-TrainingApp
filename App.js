import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from "./components/Menu.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yo</Text>
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: "realitve",
    backgroundColor: "#393E46"
  },
});
