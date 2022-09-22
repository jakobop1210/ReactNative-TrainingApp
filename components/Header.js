import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Header() {

  return (
    <View style={styles.HeaderContainer}>
        
    </View>
  );
} 

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#393E46",
    height: 80,
    position: "absolute",
    top: 0,
    paddingBottom: 20
  },
});