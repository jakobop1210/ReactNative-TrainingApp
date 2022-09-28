import { StyleSheet, Text, Pressable } from 'react-native';

export default function CreateButton({ text, onPress }) {

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50,
        width: 180,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
    }
});