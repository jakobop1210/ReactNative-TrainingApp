import { StyleSheet, Text, View } from 'react-native';

export default function Nutrition({ navigation }) {
  return (
      <View style={styles.container}>
            <Text>Nutrition</Text>
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