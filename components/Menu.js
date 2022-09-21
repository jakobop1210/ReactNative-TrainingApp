import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
        <View styles={styles.menuView}>
            <Button
                title="Home"
                color="#393E46"
            />
        </View>
        <View styles={styles.menuView}>
            <Button
                title="Workouts"
                color="#393E46"
            />
        </View>
        <View styles={styles.menuView}>
            <Button
                title="Progress"
                color="#393E46"
            />
        </View>
        <View styles={styles.menuView}>
            <Button
                title="Profile"
                color="#393E46"
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFD369",
    height: 120,
    position: "absolute",
    bottom: 0
  },
  menuView: {
    width: "100%",
    height: 120,
  }
});