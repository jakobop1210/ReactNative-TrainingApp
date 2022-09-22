import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function MenuItem (props) {

  function handlePress() {
    
  }

  return (
      <View style={styles.menuItemContainer}>
          <Pressable
            style={({ pressed }) => pressed && styles.pressedButton}
            onPress={handlePress}>
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
  },
  menuText: {
    fontSize: 14,
    fontWeight: "600"
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuIconContainer: {
    alignItems: "center",
  },
  menuTextContainer: {
    alignItems: "center",
  },
  pressedButton: {
    opacity: 0.4,
  }
});