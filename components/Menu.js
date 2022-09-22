import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import MenuItem from './MenuItem.js';

export default function Menu() {

  return (
    <View style={styles.menuContainer}>
        <MenuItem name="Home" iconUrl={require("./menuIcons/homeIcon.png")}/>
        <MenuItem name="Training" iconUrl={require("./menuIcons/dumbellIcon.png")}/>
        <MenuItem name="Progress" iconUrl={require("./menuIcons/progressIcon.png")}/>
        <MenuItem name="Nutrition" iconUrl={require("./menuIcons/nutritionIcon.png")}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFD369",
    height: 90,
    position: "absolute",
    bottom: 0,
    paddingBottom: 20
  },
});