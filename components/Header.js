import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditButton from './buttons/EditButton';

export default function Header({ title }) {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconView}>
        <Pressable style={({pressed}) => pressed && StyleSheet.pressedIcon}>
          <Ionicons name="settings" color="#6B6E74" size={35} />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
      <EditButton />
    </View>
  );
} 

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: 110,
    paddingBottom: 10,
    borderBottomColor: "#393E46",
    borderBottomWidth: 1,
  },
  iconView: {
    position: "absolute",
    left: 15,
    bottom: 10
  },
  title: {
    color: "#FFD369",
    fontSize: 30
  }
});