import { StyleSheet, Text, View } from 'react-native';

export default function Training({ navigation }) {
  return (
      <View style={styles.container}>
            <Text>Training</Text>
      </View>
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