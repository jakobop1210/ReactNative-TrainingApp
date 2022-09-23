import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Button({title}) {

    return (
        <Pressable style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.5
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>{title}</Text>
            <Ionicons name="add" color="#EEEEEE" size={30} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 200,  
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
        fontWeight: "600"
    }
});