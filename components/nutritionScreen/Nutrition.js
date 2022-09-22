import { StyleSheet, Text, View } from 'react-native';

export default function Nutrition() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <Text>Nutrition</Text>
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