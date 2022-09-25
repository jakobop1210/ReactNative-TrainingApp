import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from "./buttons/GoBackButton";

export default function Header({ title, showGoBackButton }) {
    let goBackButton;

    if (showGoBackButton) {
      goBackButton = <GoBackButton />;
    } else {
        goBackButton = <></>;
    }

    return (
      <View style={styles.headerContainer}>
      
        {goBackButton}
        <View style={styles.iconView}>
          <Pressable>
            <Ionicons name="settings" color="#6B6E74" size={30} />
          </Pressable>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
} 

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: 120,
    paddingBottom: 10,
    backgroundColor: "#222831",
  },
  iconView: {
    position: "absolute",
    right: 20,
    bottom: 10
  },
  title: {
    color: "#FFD369",
    fontSize: 30
  },
});