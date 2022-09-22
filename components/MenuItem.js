import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function MenuItem (props) {

  return (
    <View style={styles.menuItemContainer}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressedButton}>
            <View style={styles.menuIconContainer}>
                <Image 
                  style={styles.menuIcon}
                  source={props.iconUrl} />
            </View>
            <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>
                    {props.name}
                </Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "700"
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  menuIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80
  },
  menuTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressedButton: {
    opacity: 0.5,
    border: 2
  }
});